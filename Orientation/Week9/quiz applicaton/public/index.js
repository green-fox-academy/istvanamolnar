'use strict';

const playButton = document.querySelector('#startGame');
playButton.addEventListener('click', (event) => {
  event.preventDefault();
  let name = document.querySelector('input[name="username"]').value;
  let placeHolder = document.querySelector('.label');
  if (event.target.id === "questions") {
    window.location.href = "http://localhost:3000/questions";
  } else if (event.target.id === "play") {
    if (name) {
      window.location.href = `http://localhost:3000/game`;
    } else if (event.target.tagName === 'BUTTON') {
      placeHolder.style.color = "#ff0000";
      placeHolder.style.fontWeight = 800;
      document.querySelector('input').style.borderBottomColor = "#ff0000";
    }
  } 
})