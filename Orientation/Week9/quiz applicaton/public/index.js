'use strict';

const playButton = document.querySelector('#play');
playButton.addEventListener('click', () => {
  window.location.href="/game";
})

const editQuestionsButton = document.querySelector('#questions');
editQuestionsButton.addEventListener('click', () => {
  window.location.href="/questions";
})