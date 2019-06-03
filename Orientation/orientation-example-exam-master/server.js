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

app.get('/api/links', (req, res) => {
  connection.query(`SELECT id, url, alias, hitCount FROM alias`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.post('/api/links', (req, res) => {
  connection.query(`SELECT * FROM alias WHERE alias = ?`, [req.body.alias], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) { // if alias does not exist
      let secretCode = Math.floor(Math.random() * 9999);
      if (secretCode <= 999) {
        secretCode += 1000;
      }
      connection.query(`INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?);`, [req.body.url, req.body.alias, secretCode], (err, status) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        connection.query(`SELECT * FROM alias WHERE id = ?`, [status.insertId], (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          res.send(rows);
        });
      });
    } else { // if alias exists
      res.status(400).send();
    }
  });
});

app.delete('/api/links/:id', (req, res) => {
  let reqCode = req.body.secretCode;
  connection.query(`SELECT secretCode FROM alias WHERE id = ?`, [req.params.id], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) {
      res.status(404).send();
    } else {
      if (rows[0].secretCode === reqCode) {
        connection.query(`DELETE FROM alias WHERE id = ?;`, [req.params.id], (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
          }
          res.status(204).send();
        });
      } else {
        res.status(403).send();
      }
    }
  });
});

app.get('/api/:alias', (req, res) => {
  connection.query(`SELECT * FROM alias WHERE alias = ?`, [req.params.alias], (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    if (rows.length === 0) { // if alias does not exist
      res.status(404).send();
    } else { // if alias exists
      connection.query(`UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?`, [req.params.alias], (err, rows) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        res.send();
      })
    }
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));
