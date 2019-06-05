'use strict';

fetch(`http://localhost:3000/api/questions`)
.then((res) => res.json())
.then((data) => {
  let sibling = document.querySelector('#deleteQuestions')
  data.forEach(question => {
    let dataDiv = sibling.appendChild(document.createElement('DIV'));
    dataDiv.className = "question";
    dataDiv.appendChild(document.createElement('P')).innerText = question.question;
    dataDiv.appendChild(document.createElement('A')).innerText = "delete";
    dataDiv.lastChild.className = "delete";
    dataDiv.lastChild.setAttribute("data-id", question.id);
    sibling.appendChild(document.createElement('HR'));
  })
  sibling.removeChild(sibling.lastChild);
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
    .then((res) => console.log(res))
  }
});