'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const port = 3000;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/bookinfo.html'))
});

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
  console.log('OK');
});

app.get('/titles', (req, res) => {
  connection.query(`SELECT book_name FROM book_mast;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.send(rows);
  });
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

app.get('/books', (req, res) => {
  if (req.query.category) {
    connection.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    WHERE cate_descrip = '${typeof req.query.category === "string" ? req.query.category : req.query.category.join('\' OR cate_descrip = \'')}'
    ORDER BY book_name;`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
  } else {
    if (err) {
      console.log(err.toString());
      return;
    }
    res.redirect('http://localhost:3000/');
  }
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));