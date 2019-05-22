'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/assets'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html', '/assets'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));