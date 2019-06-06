'use strict';

fetch(`http://localhost:3000/api/questions`)
.then((res) => res.json())
.then((data) => {
  let sibling = document.querySelector('#deleteQuestions')
  data.forEach(question => {
    let dataDiv = sibling.appendChild(document.createElement('DIV'));
    dataDiv.className = "question bottomBorder";
    dataDiv.appendChild(document.createElement('P')).innerText = question.question;
    dataDiv.appendChild(document.createElement('A')).innerText = "delete";
    dataDiv.lastChild.className = "delete";
    dataDiv.lastChild.setAttribute("data-id", question.id);
  })
  sibling.lastChild.className = "question";
})

let deleteButton = document.querySelector('#deleteQuestions');
deleteButton.addEventListener('click', (event) => {
  if (event.target.className === "delete") {
    fetch('http://localhost:3000/deletequestion', {
      method:'DELETE',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        questionId: `${event.target.dataset.id}`
      })
    })
    .then()
    .catch(error => console.log(error))
    event.target.parentNode.remove();
    deleteButton.lastChild.className = "question";
  }
});

let addQuestionForm = document.querySelector('form');
addQuestionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch('http://localhost:3000/addquestion', {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-type':'application/json'
    },
      body:JSON.stringify({
      question: `${event.target.elements[0].value}`,
      answer1: {text: `${event.target.elements[1].value}`, is_correct: `${event.target[5].checked ? "1" : "0"}`},
      answer2: {text: `${event.target.elements[2].value}`, is_correct: `${event.target[6].checked ? "1" : "0"}`},
      answer3: {text: `${event.target.elements[3].value}`, is_correct: `${event.target[7].checked ? "1" : "0"}`},
      answer4: {text: `${event.target.elements[4].value}`, is_correct: `${event.target[8].checked ? "1" : "0"}`},
    })
  })
  .then(data => {
    addQuestionForm.reset();
    alert('Question added');
    return data.json();
  })
  .then(data => {
    let sibling = document.querySelector('#deleteQuestions');
    sibling.lastChild.className = "question bottomBorder";
    let dataDiv = sibling.appendChild(document.createElement('DIV'));
    dataDiv.className = "question";
    dataDiv.appendChild(document.createElement('P')).innerText = data.question;
    dataDiv.appendChild(document.createElement('A')).innerText = "delete";
    dataDiv.lastChild.className = "delete";
    dataDiv.lastChild.setAttribute("data-id", data.id);
  })
});