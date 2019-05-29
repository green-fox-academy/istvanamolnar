'use strict';

let genre = document.querySelector('#genre');
let movie = document.querySelector('#movie');

genre.addEventListener('click', () => {
  for (let i = 0; i < movie.children.length; i++) {
    movie.children[i].style.display = 'initial';
    if (movie.children[i].dataset.genre !== genre.value) {
      movie.children[i].style.display = 'none';
    }
  }
});

movie.addEventListener('click', (event) => {
  for (let i = 0; i < movie.children.length; i++) {
    if (movie.children[i].value === event.target.value) {
      document.querySelector('#selectedMovie').innerText = movie.children[i].innerText;
    };
  }
});
