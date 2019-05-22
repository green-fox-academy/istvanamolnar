'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/arrays', (req, res) => {
  res.send({"result": calculate(req.body.what, req.body.numbers)});
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));

function calculate(what, array) {
  return what === "sum" || what === "multiply" 
  ? array.reduce((a, b) => what === "sum" ? a + b : what === "multiply" ? a * b : false) 
  : array.map(x => x * 2);
}