'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(express.static('assets'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/doubling', (req, res) => {
  let doubled = {
    received: req.query.input,
    result: req.query.input * 2
  }
  res.send(doubled)
});

app.get('/greeter', (req, res) => {
  let greeter = {
    name: req.query.name || `Please provide a name!`,
    title: req.query.title || `Please provide a title!`,
    welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    error: !req.query.name || !req.query.title ? `Please provide a name and title!` : `Ǹo error`
  }
  res.send(greeter)
});

app.get('/appenda/:word', (req, res) => {
  let append = {
    appended: req.params.word + "a"
  }
  res.send(append)
});

app.use(bodyParser.json());
app.post('/dountil/:action', (req, res) => {
  let calculation = {
    result: req.params.action && req.body.until ? calculate(req.body.until, req.params.action) : "Please provide a number!"
  }
  console.log(calculation.result)
  res.send(calculation);
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));

function calculate(number, action) {
  let result = number;
  for (let i = number - 1; i > 0; i--) {
    if (action === "sum") {
      result += i;
    } else {
      result *= i;
    }
  }
  return result;
}