'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'mysqlPractice',
  database: 'bookinfo'
});

connection.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log(`Connected to Database.`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/fulldata', (req, res) => {
  const fullData = new Promise((resolve, reject) => {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ORDER BY book_name;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  fullData
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
});

app.get('/bytitle', (req, res) => {
  const dataByTitle = new Promise((resolve, reject) => {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ORDER BY book_name;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  dataByTitle
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
});

app.get('/byauthor', (req, res) => {
  const dataByAuthor = new Promise((resolve, reject) => {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ORDER BY aut_name;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  dataByAuthor
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
});

app.get('/bycategory', (req, res) => {
  const dataByCategory = new Promise((resolve, reject) => {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ORDER BY cate_descrip;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  dataByCategory
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
});

app.get('/bypublisher', (req, res) => {
  const dataByPublisher = new Promise((resolve, reject) => {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ORDER BY pub_name;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  dataByPublisher
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
});

app.get('/byprice', (req, res) => {
  const dataByPrice = new Promise((resolve, reject) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY book_price;`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  dataByPrice
    .then(rows => res.send(rows))
    .catch(error => console.log(error))
  });

app.listen(port, () => console.log(`Server is running on port ${port}.`));
