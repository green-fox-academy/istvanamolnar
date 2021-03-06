'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
//const path = require('path'); // if UI => HTML
const port = 3000;

app.use(express.json());


//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html'))); // if UI => HTML

app.get('/', function (req, res) { // no UI => DB
  res.send('Hello World');
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'password',
  database: 'database'
});

connection.connect((err) => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('OK');
});

app.get('*', (req, res) => {
  res.send('URL is not valid');
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`)); // should be at the end of the code