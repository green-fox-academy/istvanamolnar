'use strict';

let questionCounter = 1;
let score = 0;

function clearTable() {
  document.querySelector('#question').firstChild.innerText = '';
  document.querySelector('#question').removeAttribute("data-id");
  let answers = document.querySelector('#answers');
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
}

function getAQuestion() {
  clearTable();
  document.querySelector('#questionCounter').innerText = `Question: ${questionCounter}`;
  document.querySelector('#score').innerText = `Score: ${score}`;
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

function getLootBox() {
  clearTable();
  document.querySelector('#question').firstChild.innerText = `WELL PLAYED!`;
  document.querySelector('#question').appendChild(document.createElement('DIV')).innerText = `Your score is: ${score}`;
  document.querySelector('#question').appendChild(document.createElement('DIV')).innerHTML = `REWARD: <span style="font-weight: bolder;">EPIC LootBox</span>`;
  document.querySelector('#answers').remove();
  let getReward = document.createElement('BUTTON');
  getReward.innerText = "Claim my reward"
  document.querySelector('#question').appendChild(getReward);
  getReward.addEventListener('click', (event) => {
    location.href = 'https://purr.objects-us-east-1.dream.io/i/fa3qi.jpg';
  })
}

function chooseOption() {
  let showCorrectAnswer;
  getAQuestion();
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
            score++;
          } else {
            let showCorrectAnswer = setInterval(() => {
              event.target.className += ' wrong';
              correctAnswer.className = (correctAnswer.className === 'answer' ? 'answer correct' : 'answer');
            }, 500);
          }
        }, 3000);
        setTimeout(() => {
          clearInterval(showCorrectAnswer);
          questionCounter++;
          if (questionCounter > 10) {
            getLootBox();
          } else {
            chooseOption();
          }
        }, 7000);
      })
    }
  }, {once: true});
}

chooseOption();