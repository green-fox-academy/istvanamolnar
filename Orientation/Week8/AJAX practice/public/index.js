'use strict';

/* const bookIdRequest = new XMLHttpRequest();
  bookIdRequest.open('GET', 'http://localhost:3000/fulldata', true);
  bookIdRequest.send();
  bookIdRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(x => {
      fillTable(x);
    });
  }; */

// a function that calls itself => ( function xy() {} ) ()
(function getAllBooks(){
  fetch(`http://localhost:3000/fulldata`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(book => {
      fillTable(book);
    });
  })
})();



document.querySelector('thead').addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.pathname !== undefined) {
    clearTable();
    orderByCategory(event.target.pathname);
  }
  //orderBy(event.target.pathname);
});

let select = document.querySelector('#category');
select.addEventListener('click', (event) => {
  clearTable();
  filterByCategory(event.target.selectedOptions[0].innerText);
});

/* function orderBy(feature) {
  const orderRequest = new XMLHttpRequest();
  orderRequest.open('GET', `http://localhost:3000${feature}`, true);
  orderRequest.send();
  orderRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(book => {
      fillTable(book);
    });
  };
} */

function orderByCategory(feature){
  fetch(`http://localhost:3000${feature}`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(book => {
      fillTable(book);
    });
  })
}

function clearTable() {
  const tableBody = document.querySelector('tbody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

/* function filterByCategory(select) {
  const getBooks = new XMLHttpRequest();
  getBooks.open('GET', 'http://localhost:3000/fulldata', true);
  getBooks.send();
  getBooks.onload = (data) => {
    const books = JSON.parse(data.target.response);
    books.forEach(book => {
      if (book.cate_descrip === select) {
        fillTable(book);
      }
    });
  };
} */

function filterByCategory(select){
  fetch(`http://localhost:3000/fulldata`)
  .catch('nemjo')
  .then((res) => res.json())
  .then((data) => {
    data.forEach(book => {
      if (book.cate_descrip === select) {
        fillTable(book);
      }
    });
  })
}

function fillTable(data) {
  let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
  oneRow.appendChild(document.createElement("TD")).innerText = data.book_name;
  oneRow.appendChild(document.createElement("TD")).innerText = data.aut_name;
  oneRow.appendChild(document.createElement("TD")).innerText = data.cate_descrip;
  oneRow.appendChild(document.createElement("TD")).innerText = data.pub_name;
  oneRow.appendChild(document.createElement("TD")).innerText = `$ ${data.book_price}`;
}