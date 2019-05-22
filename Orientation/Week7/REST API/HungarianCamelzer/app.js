'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/translate', (req, res) => {
  let translation = {
    text: translate(req.body.text),
    lang: "teve"
  }
  res.send(translation);
});

app.listen(port, () => console.log(`The server is up and running on ${port}!`));

function translate(string) {
  return string.split('').map(x => x.match(/[aeouiéá]/ig) ? x += `v${x.toLowerCase()}` : x).join('');
}