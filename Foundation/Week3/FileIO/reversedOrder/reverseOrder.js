'use strict';

const fs = require('fs');

// Create a method that decrypts reversedOrder.txt
function reverseLines(fileFrom, fileTo) {
  const fileContent = fs.readFileSync(fileFrom, 'utf-8').split('\n').reverse().join('\n');
  fs.writeFileSync(fileTo, fileContent);
}

reverseLines('reverseOrder.txt', 'reversedOrder.txt');