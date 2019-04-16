'use strict';

const fs = require('fs');

// Create a method that decrypts reversedLines.txt
function reverseLines(fileFrom, fileTo) {
  const fileContent = fs.readFileSync(fileFrom, 'utf-8').split('\n');
  let solution = '';
  for (let i in fileContent) {
    for (let j = fileContent[i].length - 1; j >= 0; j--) {
      solution += fileContent[i][j];
    }
    solution += '\n';
  }
  fs.writeFileSync(fileTo, solution);
}

console.log(reverseLines('reverseLines.txt', 'reversedLines.txt'));