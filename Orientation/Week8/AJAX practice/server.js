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
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY book_name;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.get('/bytitle', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY book_name;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.get('/byauthor', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY aut_name;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.get('/bycategory', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY cate_descrip;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.get('/bypublisher', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY pub_name;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.get('/byprice', (req, res) => {
  connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast 
  LEFT JOIN author ON book_mast.aut_id = author.aut_id 
  LEFT JOIN category ON book_mast.cate_id = category.cate_id 
  LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
  ORDER BY book_price;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
});

app.post('/signup',(req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
