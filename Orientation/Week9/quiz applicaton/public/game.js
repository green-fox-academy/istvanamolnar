'use strict';

function getAQuestion() {
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
        option.setAttribute("data-aid", answer.aid);
      })
    })
}

function chooseOption() {
  document.querySelector('#answers').addEventListener('click', (event) => {
    if (event.target.className === 'answer') {
      event.target.className += ' chosenOption';
      const answerId = event.target.dataset.aid;
      const questionId = document.querySelector('#question').dataset.id;
      fetch(`http://localhost:3000/checkanswer/?qid=${questionId}&aid=${answerId}`)
      .then((res) => res.json())
      .then((data) => {
        const correctAnswer = document.querySelector(`[data-aid~="${data[0].id}"]`);
        setTimeout(() => {
          if (parseInt(answerId) === data[0].id) {
            event.target.className += ' correct';
          } else {
            setInterval(() => {
              event.target.className += ' wrong';
              correctAnswer.className = (correctAnswer.className === 'answer' ? 'answer correct' : 'answer');
            }, 500);
          }
        }, 3000);
      })
    }
  }, {once: true});
}

function clearTable() {
  document.querySelector('#question').firstChild.innerText = '';
  document.querySelector('#question').removeAttribute("data-id");
  let answers = document.querySelector('#answers');
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
}

getAQuestion();
chooseOption();
clearTable();