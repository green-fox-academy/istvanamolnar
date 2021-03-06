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

let player;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, './public/game.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './public/questions.html'));
});

  // -------------------------------- //
 // requests for modifying questions //
// -------------------------------- //

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
  connection.query(`DELETE FROM questions WHERE id = ?;`, [req.body.questionId], (err, status) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`DELETE FROM answers WHERE question_id = ?;`, [req.body.questionId], (err, status) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
    });
  });
});

app.post('/addquestion', (req, res) => {
  let questionId;
  connection.query(`INSERT INTO questions (question) VALUES (?)`, [req.body.question], (err, status) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    connection.query(`SELECT id FROM questions WHERE question = ?`, [req.body.question], (err, status) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      questionId = status[0].id;
      connection.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES 
      (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)`, [questionId, req.body.answer1.text, req.body.answer1.is_correct, questionId, req.body.answer2.text, req.body.answer2.is_correct,questionId, req.body.answer3.text, req.body.answer3.is_correct,questionId, req.body.answer4.text, req.body.answer4.is_correct], (err, status) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        res.json({question: req.body.question, id: questionId});
      });
    });
  });
})


  // ------------------------- //
 // requests for playing quiz //
// ------------------------- //

let blacklist = [];
app.get('/getaquestion', (req, res) => {
  let numOfQuestions;
  connection.query(`SELECT * FROM questions`, (err, rowsOfQuestions) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    numOfQuestions = rowsOfQuestions.length;
    function getRandomArray() {
      while (blacklist.length !== 10) {
        let randomNumber = Math.floor(Math.random() * numOfQuestions);
        blacklist.indexOf(randomNumber) === -1 ? blacklist.push(randomNumber) : false;
      }
    }
    if (blacklist.length === 0) {
      getRandomArray();
    }
    
    connection.query(`SELECT questions.question, questions.id AS qid, answers.answer, answers.id AS aid 
    FROM answers RIGHT JOIN questions ON answers.question_id = questions.id 
    WHERE questions.id = ?`, [rowsOfQuestions[blacklist[0]].id], (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      blacklist.shift();
      res.json(rows);
    });
  });
});

app.get('/checkanswer', (req, res) => {
  connection.query(`SELECT id FROM answers WHERE question_id = ? AND is_correct = 1`, [req.query.qid], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
})

app.listen(port, () => console.log(`Server is running on port ${port}.`));