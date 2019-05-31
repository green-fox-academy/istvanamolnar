'use strict';

const form = document.querySelector('#signUpForm')
form.addEventListener("submit", (event) => {
  event.preventDefault();
  doCall();
});

let doCall = () => {
  let aliasRequest = new XMLHttpRequest();
  aliasRequest.open('POST', 'http://localhost:3000/api/links', true);
  aliasRequest.setRequestHeader('Content-Type', 'application/json');
  aliasRequest.onload = (data) => {
    if (data.target.status === 400) {
      document.querySelector('p').innerText = data.target.response.slice(1, data.target.response.length - 1);
      document.querySelector('p').style.color = "#ff0000";
    } else if (data.target.status === 200) {
      document.querySelector('p').innerText = data.target.response;
      document.querySelector('p').style.color = "#000000";
    }
  }
  aliasRequest.send(JSON.stringify({
    url: document.querySelector('input[name="url"]').value,
    alias: document.querySelector('input[name="alias"]').value
  }));
}

const successfullyCreated = () => {

}
/* document.querySelector('input[name="url"]').value = '';
document.querySelector('input[name="alias"]').value = ''; */