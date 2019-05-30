'use strict';

const signUpRequest = new XMLHttpRequest();
  signUpRequest.open('POST', 'http://localhost:3000/signup', true);
  signUpRequest.send();
  signUpRequest.onload = (data) => {
    console.log(signUpRequest);
    const id = JSON.parse(data);
    console.log(id);
  };