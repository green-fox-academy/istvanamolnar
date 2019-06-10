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
  let container = document.querySelector('#question');
  container.firstChild.innerText = `WELL PLAYED!`;
  container.appendChild(document.createElement('DIV')).innerText = `Your score is: ${score}`;
  container.appendChild(document.createElement('DIV')).innerHTML = `REWARD:`;
  container.lastChild.style.marginTop = "30px";
  document.querySelector('#answers').remove();
  let getReward = document.createElement('BUTTON');
  getReward.innerText = "EPIC Loot Box";
  document.querySelector('#questionarea').appendChild(getReward);
  getReward.addEventListener('click', () => {
    let gameArea = document.querySelector('#questionarea');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
    .then(data => {
      while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
      }
      gameArea.style.backgroundImage = `url(${data.message})`;
      gameArea.style.backgroundSize = '100% 100%';
      gameArea.style.backgroundRepeat = "no-repeat";
      return data;
    })
    .then(data => {
      setTimeout(() => {
        let congrats = document.createElement('P');
        congrats.innerHTML = "Congtratulations!<br>You have won a cute dog photo!<br>See you later!";
        congrats.className = "bye";
        gameArea.appendChild(congrats);
        gameArea.style.justifyContent = "flex-end";
      }, 3000);
      setTimeout(() => {
        window.location.href = "http://localhost:3000/";
      }, 7000);
    })
    .catch(error => console.log(error));
  });
}

function chooseOption() {
  getAQuestion();
  document.querySelector('#answers').addEventListener('click', clickHandler, false);
}

let clickHandler = function (event) {
  let showCorrectAnswer;
  if (event.target.className === 'answer') {
    document.querySelector('#answers').removeEventListener('click', clickHandler, false);
    event.target.className += ' chosenOption';
    const answerId = event.target.dataset.aid;
    const questionId = document.querySelector('#question').dataset.id;
    fetch(`http://localhost:3000/checkanswer/?qid=${questionId}&aid=${answerId}`)
      .then((res) => res.json())
      .then((data) => {
        const correctAnswer = document.querySelector(`[data-aid~="${data[0].id}"]`);
        setTimeout(() => {
          let showCorrectAnswer = setInterval(() => {
            if (parseInt(answerId) === data[0].id) {
              event.target.className = (event.target.className === 'answer' ? 'answer correct' : 'answer');
              score++;
            } else {
                event.target.className += ' wrong';
                correctAnswer.className = (correctAnswer.className === 'answer' ? 'answer correct' : 'answer');
            }
          }, 500);
        }, 3000);
        setTimeout(() => {
          clearInterval(showCorrectAnswer);
          questionCounter++;
          if (questionCounter > 1) {
            getLootBox();
          } else {
            chooseOption();
          }
        }, 7000);
      })
      .catch(error => console.log(error));
  }
};

document.querySelector('#managequestions').addEventListener('click', (event) => {
  window.location.href = "http://localhost:3000/questions";
})

chooseOption();