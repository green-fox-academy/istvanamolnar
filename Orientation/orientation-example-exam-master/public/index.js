'use strict';

const form = document.querySelector('#signUpForm')
form.addEventListener("submit", (event) => {
  event.preventDefault();
  respondToStatus();
});

/* let respondToStatus = () => {
  let aliasRequest = new XMLHttpRequest();
  aliasRequest.open('POST', 'http://localhost:3000/api/links', true);
  aliasRequest.setRequestHeader('Content-Type', 'application/json');
  aliasRequest.onload = (data) => {
    const message = document.querySelector('#message');
    if (data.target.status === 400) {
      message.innerText = `Your alias is already in use!`;
      message.className = 'error';
    } else if (data.target.status === 200) {
      const response = JSON.parse(data.target.response)[0];
      let alias = response.alias;
      let secretCode = response.secretCode;
      message.innerHTML = `Your URL is aliased to <strong>${alias}</strong> and your secret code is <strong>${secretCode}</strong>.`
      document.querySelector('#signUpForm').reset();
      message.className = 'aliased';
    }
  }
  aliasRequest.send(JSON.stringify({
    url: document.querySelector('input[name="url"]').value,
    alias: document.querySelector('input[name="alias"]').value
  }));
} */

let respondToStatus = () => {
  fetch('http://localhost:3000/api/links', {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      url: document.querySelector('input[name="url"]').value,
      alias: document.querySelector('input[name="alias"]').value
    })
  })
  .then((res) => {
    if (res.status === 400) {
      message.innerText = `Your alias is already in use!`;
      message.className = 'error';
    } else {
      return res.json();
    }
  })
  .then((data) => {
    const response = data[0];
    let alias = response.alias;
    let secretCode = response.secretCode;
    message.innerHTML = `Your URL is aliased to <strong>${alias}</strong> and your secret code is <strong>${secretCode}</strong>.`
    document.querySelector('#signUpForm').reset();
    message.className = 'aliased';
  })

  .catch(error => console.log(error))
}

let getEntries = new XMLHttpRequest();
getEntries.open('GET', 'http://localhost:3000/api/links', true);
getEntries.setRequestHeader('Content-Type', 'application/json');
getEntries.onload = (data) => {
  console.log(data);
}