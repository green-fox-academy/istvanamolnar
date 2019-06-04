'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'mysqlPractice',
  database: 'aliasdb'
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

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, './public/game.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './public/questions.html'));
});


app.listen(port, () => console.log(`Server is running on port ${port}.`));