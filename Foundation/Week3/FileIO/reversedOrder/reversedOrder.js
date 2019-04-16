'use strict';

const fs = require('fs');

// Create a method that decrypts reversedOrder.txt
function reverseLines(file) {
  const fileContent = fs.readFileSync(file, 'utf-8').split('\n').reverse().join('\n');
  return fileContent;
}

console.log(reverseLines('reversedOrder.txt'));