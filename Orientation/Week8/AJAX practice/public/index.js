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
  if (event.target.innerText[0] !== 'C') {
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

let select = document.querySelector('#category');
select.addEventListener('click', (event) => {
  filterByCategory(event.target.selectedOptions[0].innerText);
});

function clearTable() {
  const tableBody = document.querySelector('tbody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function filterByCategory(select) {
  const getBooks = new XMLHttpRequest();
  getBooks.open('GET', 'http://localhost:3000/fulldata', true);
  getBooks.send();
  getBooks.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(movie => {
      if (movie.cate_descrip === select) {
        let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
        oneRow.appendChild(document.createElement("TD")).innerText = movie.book_name;
        oneRow.appendChild(document.createElement("TD")).innerText = movie.aut_name;
        oneRow.appendChild(document.createElement("TD")).innerText = movie.cate_descrip;
        oneRow.appendChild(document.createElement("TD")).innerText = movie.pub_name;
        oneRow.appendChild(document.createElement("TD")).innerText = `$ ${movie.book_price}`;
      }
    });
  };
}
