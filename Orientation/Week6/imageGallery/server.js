'use strict';

const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const mysql = require('mysql');
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(fileUpload());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'istvan',
  password: 'mysqlPractice',
  database: 'imageGallery'
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

const mysqlQueryPromise = (mysqlQuery, details) => {
  return new Promise((resolve, reject) => {
    connection.query(mysqlQuery, details,
      (error, data) => {
        error ? reject(error) : resolve(data);
      }
    );
  });
};

app.get('/getimages', (req, res) => {
  mysqlQueryPromise(`SELECT * FROM myImages`)
    .then(data => res.status(200).json(data))
    .catch(error => console.log(error));
});

app.get('/showimage/:id', (req, res) => {
  mysqlQueryPromise(`SELECT * FROM myImages WHERE id = ?`, [req.params.id])
    .then(data => res.status(200).json(data))
    .catch(error => console.log(error));
});

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  
  let picture = req.files.picture;
  picture.mv(`./public/images/${picture.name}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
  mysqlQueryPromise(`INSERT INTO myImages (title, description, url) VALUES (?, ?, ?);`, [req.body.title, req.body.description, `images/${picture.name}`])
  .then(res.redirect('http://localhost:3000/'))
  .catch(error => console.log(error));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));