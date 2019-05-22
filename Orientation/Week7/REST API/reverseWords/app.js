'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/sith', (req, res) => {
  res.send(swapWords(req.body.text));
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));

function swapWords(string) {
  let arraySentence = string.split(' ');
  for (let i = 0; i < arraySentence.length; i += 2) {
    let temp = "";
    temp = arraySentence[i];
    arraySentence[i] = arraySentence[i + 1];
    arraySentence[i + 1] = temp;
  }
  return arraySentence.join(' ');
}