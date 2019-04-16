'use strict';

const fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyContent(fileFrom, fileTo) {
  const fileContent = fs.readFileSync(fileFrom, 'utf-8');
  fs.writeFileSync(fileTo, fileContent);
}

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function getIP(file) {
  return fs.readFileSync(file, 'utf-8').split('\n').map(x => x.substr(27, 11));
}

function getPostRatio(file) {
  let get = 0;
  let post = 0;
  fs.readFileSync(file, 'utf-8').split('\n').map(x => x[41] === 'P' ? post++ : get++);
  return `${get}:${post}`;
}
//console.log(getIP('log.txt'));
//console.log(getPostRatio('log.txt'));

