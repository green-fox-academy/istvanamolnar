'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/newsletter.html'));
});

app.post('/signup', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));