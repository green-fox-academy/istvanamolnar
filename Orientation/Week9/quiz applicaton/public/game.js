'use strict';


let getQuestion = () => {
  let getAquestion = new XMLHttpRequest();
  getAquestion.open('GET', 'http://localhost:3000/api/game', true);
  getAquestion.setRequestHeader('Content-Type', 'application/json');
  getAquestion.send();
  getAquestion.onload = (data) => {
    console.table(JSON.parse(data));
  }
}