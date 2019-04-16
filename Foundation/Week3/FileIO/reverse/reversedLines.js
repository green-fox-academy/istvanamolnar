'use strict';

const fs = require('fs');

// Create a method that decrypts reversed-lines.txt
function reverseLines(file) {
  const fileContent = fs.readFileSync(file, 'utf-8').split('\n');
  let solution = '';
  for (let i in fileContent) {
    for (let j = fileContent[i].length - 1; j >= 0; j--) {
      solution += fileContent[i][j];
    }
    solution += '\n';
  }
  return solution;
}

console.log(reverseLines('reversedLines.txt'));