'use strict';

const bookIdRequest = new XMLHttpRequest();
  bookIdRequest.open('GET', 'http://localhost:3000/fulldata', true);
  bookIdRequest.send();
  bookIdRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(x => {
      let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
      oneRow.appendChild(document.createElement("TD")).innerText = x.book_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.aut_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.cate_descrip;
      oneRow.appendChild(document.createElement("TD")).innerText = x.pub_name;
      oneRow.appendChild(document.createElement("TD")).innerText = `$ ${x.book_price}`;
    });
  };

document.querySelector('thead').addEventListener('click', (event) => {
  event.preventDefault();
  clearTable();
  if (event.target.innerText[0] === 'C') {
    console.log(event) //.target.selectedOptions[0].innerText);
  } else {
    orderBy(event.target.href);
  }
});

function orderBy(feature) {
  const orderRequest = new XMLHttpRequest();
  orderRequest.open('GET', `${feature}`, true);
  orderRequest.send();
  orderRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(book => {
      let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"));
      oneRow.appendChild(document.createElement("TD")).innerText = book.book_name;
      oneRow.appendChild(document.createElement("TD")).innerText = book.aut_name;
      oneRow.appendChild(document.createElement("TD")).innerText = book.cate_descrip;
      oneRow.appendChild(document.createElement("TD")).innerText = book.pub_name;
      oneRow.appendChild(document.createElement("TD")).innerText = `$ ${book.book_price}`;
    });
  };
}

function clearTable() {
  const tableBody = document.querySelector('tbody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

let select = document.querySelector('#category')
select.addEventListener('click', () => {
  for (let i = 0; i < select.children.length; i++) {
    select.children[i].style.display = 'initial';
    if (select.children[i].dataset.category !== select.value) {
      console.log(select.children[i]);
      console.log(select.value);
      //select.children[i].style.display = 'none';
    }
  }
});
function filterByCategory() {
  const bookIdRequest = new XMLHttpRequest();
  bookIdRequest.open('GET', 'http://localhost:3000/fulldata', true);
  bookIdRequest.send();
  bookIdRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(x => {
      let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
      oneRow.appendChild(document.createElement("TD")).innerText = x.book_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.aut_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.cate_descrip;
      oneRow.appendChild(document.createElement("TD")).innerText = x.pub_name;
      oneRow.appendChild(document.createElement("TD")).innerText = `$ ${x.book_price}`;
    });
  };
}
