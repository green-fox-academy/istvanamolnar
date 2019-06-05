'use strict';


let getAQuestion = new XMLHttpRequest();
getAQuestion.open('GET', 'http://localhost:3000/getaquestion', true);
getAQuestion.setRequestHeader('Content-Type', 'application/json');
getAQuestion.send();
getAQuestion.onload = (data) => {
  let dataRecieved = JSON.parse(data.target.response);
  let question =  dataRecieved[0].question;
  let answerOne =  dataRecieved[0].answer;
  let answerTwo =  dataRecieved[1].answer;
  let answerThree =  dataRecieved[2].answer;
  let answerFour =  dataRecieved[3].answer;
  document.querySelector('#question').innerText = question;
  document.querySelector('#a1').innerText = answerOne;
  document.querySelector('#a2').innerText = answerTwo;
  document.querySelector('#a3').innerText = answerThree;
  document.querySelector('#a4').innerText = answerFour;
};