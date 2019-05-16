'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todos', {
    todos: [
      'get up',
      'code',
      'eat',
      'sleep',
      'repeat'
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});