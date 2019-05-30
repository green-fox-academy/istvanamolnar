'use strict';


const form = document.querySelector('#signUpForm').addEventListener("submit", (event) => {
  event.preventDefault();
  doCall();
});

document.querySelector('button').addEventListener('click', (event) => {
});

const doCall = () => {
  const signUpRequest = new XMLHttpRequest();
  signUpRequest.open('POST', 'http://localhost:3000/signup', true);
  signUpRequest.setRequestHeader('Content-Type', 'application/json');
  signUpRequest.onload = (data) => {
    console.log(JSON.parse(data.target.response));
  }
  signUpRequest.send(JSON.stringify({
    name: document.querySelector('input[name="username"]').value,
    email: document.querySelector('input[name="email"]').value
  })

  );
}