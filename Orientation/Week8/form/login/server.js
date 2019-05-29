'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  console.log(req.body);
  /* res.send('Hello World!') */
  res.redirect('/');
});

app.get('/forgotpassword', (res, req) => {
  res.redirect('/forgotpassword')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));