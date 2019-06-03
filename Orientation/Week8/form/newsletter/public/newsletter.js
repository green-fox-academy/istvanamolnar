'use strict';


const form = document.querySelector('#signUpForm')
form.addEventListener("submit", (event) => {
  event.preventDefault();
//  doCall();
  addPost();
});

/* const doCall = () => {
  const signUpRequest = new XMLHttpRequest();
  signUpRequest.open('POST', 'http://localhost:3000/signup', true);
  signUpRequest.setRequestHeader('Content-Type', 'application/json');
  signUpRequest.onload = (data) => {
    console.log(JSON.parse(data.target.response));
  }
  signUpRequest.send(JSON.stringify({
    name: document.querySelector('input[name="username"]').value,
    email: document.querySelector('input[name="email"]').value
  }));
  document.querySelector('input[name="username"]').value = '';
  document.querySelector('input[name="email"]').value = '';
} */

const addPost = () => {
  fetch('http://localhost:3000/signup', {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      name: document.querySelector('input[name="username"]').value,
      email: document.querySelector('input[name="email"]').value
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}