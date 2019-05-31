'use strict';

const form = document.querySelector('#signUpForm')
form.addEventListener("submit", (event) => {
  event.preventDefault();
  doCall();
});

const doCall = () => {
  const aliasRequest = new XMLHttpRequest();
  aliasRequest.open('POST', 'http://localhost:3000/api/links', true);
  aliasRequest.setRequestHeader('Content-Type', 'application/json');
  aliasRequest.onload = (data) => {
    document.querySelector('p').innerText = data.target.response.slice(1, data.target.response.length - 1);
  }
  aliasRequest.send(JSON.stringify({
    url: document.querySelector('input[name="url"]').value,
    alias: document.querySelector('input[name="alias"]').value
  })
  );
}

const successfullyCreated = () => {

}
/* document.querySelector('input[name="url"]').value = '';
document.querySelector('input[name="alias"]').value = ''; */