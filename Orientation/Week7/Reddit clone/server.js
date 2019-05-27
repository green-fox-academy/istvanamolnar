'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const port = 3000;
const request = require('request');
let userName = '';

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

request('http://localhost:3000', (error, response, body) => {
  if (error) {
    console.log('Something went wrong.');
    console.log(error);
  } else {
    if (response.statusCode === 200) {
      //console.log(body);
    }
  }
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'mysqlPractice',
  database: 'redditclone'
});

connection.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('Connected to Database.');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', function (req, res) {
  res.send('Hello World');
})

app.get('/posts', function (req, res) {
  console.log(req.headers.username);
  req.accepts('application/json');
  res.set('Content-Type', 'application/json');
  connection.query(`SELECT * FROM posts;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200);
    res.send(rows);
  });
});

app.post('/posts', (req, res) => {
  req.accepts('application/json');
  res.set('Content-Type', 'application/json');
  connection.query(`INSERT INTO posts (title, url, score, owner) 
  VALUES (?, ?, ?, ?);`, [req.body.title, req.body.url, req.body.score, req.body.owner], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    console.log('New post added.')
    res.send(rows);
  });
});

app.delete('/posts', (req, res) => {
  connection.query(`DELETE FROM posts WHERE title = ?;`, [req.query.title], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
  });
  res.send('Post deleted.');
})

app.put('/posts/:post_id/upvote', (req, res) => {
  connection.query(`UPDATE posts SET votes = votes + 1 WHERE post_id = ?`, [req.params.post_id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.changedRows) {
      res.send("Upvoted");
    } else {
      res.send("Invalid ID");
    }
  });
});

app.put('/posts/:post_id/downvote', (req, res) => {
  connection.query(`UPDATE posts SET votes = votes - 1 WHERE post_id = ?`, [req.params.post_id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.changedRows) {
      res.send("Downvoted");
    } else {
      res.send("Invalid ID");
    }
  });
});

app.get('/:anythingElse', (req, res) => {
  res.redirect('http://localhost:3000');
});

app.listen(port, () => console.log(`The server is up and running on ${port}.`));