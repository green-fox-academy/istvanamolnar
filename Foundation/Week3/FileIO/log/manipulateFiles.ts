'use strict';
export { }
const fs: any = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyContent(fileFrom: string, fileTo: string) {
  const fileContent = fs.readFileSync(fileFrom, 'utf-8');
  fs.writeFileSync(fileTo, fileContent);
}

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function getIP(fileFrom: string, fileTo: string) {
  const ip = fs.readFileSync(fileFrom, 'utf-8').split('\n').map((x: string) => x.substr(27, 11));
  const unique = ip.filter((a: number, b: number) => ip.indexOf(a) === b).sort().join('\n');
  fs.writeFileSync(fileTo, unique);
}
getIP('log.txt', 'uniqueIP.txt');

function getPostRatio(file: string) {
  let get = 0;
  let post = 0;
  fs.readFileSync(file, 'utf-8').split('\n').map((x: string) => x[41] === 'P' ? post++ : get++);
  return `${get}:${post}`;
}
console.log(getPostRatio('log.txt'));
