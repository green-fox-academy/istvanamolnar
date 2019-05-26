'use strict';

const titleRequest = new XMLHttpRequest();
  titleRequest.open('GET', 'http://localhost:3000/titles', true);
  titleRequest.send();
  /* titleRequest.onload = (data) => {
    const titles = JSON.parse(data.target.response);
    titles.forEach(x => document.getElementById("title").appendChild(document.createElement("P")).innerText = x.book_name);
    console.log(titles);
  }; */

const bookIdRequest = new XMLHttpRequest();
  bookIdRequest.open('GET', 'http://localhost:3000/fulldata', true);
  bookIdRequest.send();
  /* bookIdRequest.onload = (data) => {
    const id = JSON.parse(data.target.response);
    id.forEach(x => {
      let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
      oneRow.appendChild(document.createElement("TD")).innerText = x.book_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.aut_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.cate_descrip;
      oneRow.appendChild(document.createElement("TD")).innerText = x.pub_name;
      oneRow.appendChild(document.createElement("TD")).innerText = `$ ${x.book_price}`;
    });
  }; */

  const filterRequest = new XMLHttpRequest();
  filterRequest.open('GET', 'http://localhost:3000/books', true);
  filterRequest.send();
  filterRequest.onload = (data) => {
    const filteredBooks = JSON.parse(data.target.response);
    console.log(filteredBooks);
    filteredBooks.forEach(x => {
      let oneRow= document.getElementsByTagName("tbody")[0].appendChild(document.createElement("TR"))
      oneRow.appendChild(document.createElement("TD")).innerText = x.book_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.aut_name;
      oneRow.appendChild(document.createElement("TD")).innerText = x.cate_descrip;
      oneRow.appendChild(document.createElement("TD")).innerText = x.pub_name;
      oneRow.appendChild(document.createElement("TD")).innerText = `$ ${x.book_price}`;
    });    
  };