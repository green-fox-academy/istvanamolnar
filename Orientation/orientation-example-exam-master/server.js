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

app.post('/api/links', (req, res) => {
  connection.query(`SELECT * FROM alias WHERE url = ?`, [req.body.url], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) {
      const secretCode = Math.floor(Math.random() * 9999);
      if (secretCode <= 999) { 
        secretCode += 1000; 
      }
      connection.query(`INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?);`, [req.body.url, req.body.alias, secretCode], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
      res.status(200).send(`Your URL is aliased to <strong>${req.body.alias}</strong> and your secret code is <strong>${secretCode}</strong>.`);
      });
    } else {
      connection.query(`UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?`, [req.body.alias], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
      });
      res.status(400).json(`Your alias is already in use!`);
    }
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
