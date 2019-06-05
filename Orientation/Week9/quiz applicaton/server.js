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
  database: 'quizapp'
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

app.get('/getaquestion', (req, res) => {
  let numOfQuestions;
  connection.query(`SELECT id FROM questions ORDER BY id desc LIMIT 1`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    numOfQuestions = rows[0].id;
    let getRandomNumber = Math.floor(Math.random() * numOfQuestions) + 1;

    connection.query(`SELECT questions.question, answers.answer 
    FROM answers RIGHT JOIN questions ON answers.question_id = questions.id WHERE questions.id = ${getRandomNumber}`, (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json(rows);
    });
  });
});

app.get('/api/questions', (req, res) => {
  connection.query(`SELECT * FROM questions`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

app.delete('/deletequestion', (req, res) => {
  connection.query(`DELETE FROM questions WHERE id = ${req.body.questionId};`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});



app.listen(port, () => console.log(`Server is running on port ${port}.`));