'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();   //  ===========>  need .env extension and need to create .env file
const table = 'example';
const PORT = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.post('/add', (req, res) => {
  conn.query(
    `INSERT INTO ${table} (name, height) VALUES ("${req.body.name}", ${
      req.body.height
    });`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log('data successfully added to database');
      res.status(201).send(rows);
    }
    );
  });
  
app.get('/showall', (req, res) => {
  conn.query(`SELECT * FROM ${table};`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      return;
    }
    console.log('data successfully requested from DB');
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT} 🔥`);
});