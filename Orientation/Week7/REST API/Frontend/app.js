'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/doubling:input', (req, res) => {
  res.render('input', {
    input: req.params.input
  });
  console.log(input)
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));
