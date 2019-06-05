'use strict';

fetch(`http://localhost:3000/getaquestion`)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('#question').firstChild.innerText = data[0].question;
    document.querySelector('#question').setAttribute("data-id", data[0].qid);
    const answerArea = document.querySelector('#answers');
    data.forEach(answer => {
      let option = answerArea.appendChild(document.createElement('DIV'));
      option.className = 'answer';
      option.innerText = answer.answer;
      option.setAttribute("data-id", answer.aid);
    })
  })


document.querySelector('#answers').addEventListener('click', (event) => {
  if (event.target.className === 'answer') {
    event.target.className += ' clickedOption';
    const answerId = event.target.dataset.id;
    const questionId = document.querySelector('#question').dataset.id;
    fetch(`http://localhost:3000/checkanswer/?qid=${questionId}&aid=${answerId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].id);
      console.log(answerId);
      setTimeout(() => {
        if (parseInt(answerId) === data[0].id) {
          console.log('NICE');
        } else {
          console.log('lofasz');
        }
      }, 3000);
    })
  }
}, {once: true});