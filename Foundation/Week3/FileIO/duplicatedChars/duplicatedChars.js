'use strict';

const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt
function removeDuplicated(fileFrom, fileTo) {
  const fileContent = fs.readFileSync(fileFrom, 'UTF-8').split('\n');
  let filtered = "";
  for (let i in fileContent) {
    for (let j = 0; j < fileContent[i].length; j += 2) {
      filtered += fileContent[i][j];
    }
    filtered += '\n';
  }
  fs.writeFileSync(fileTo, filtered);
}

removeDuplicated('duplicatedChars.txt', 'simplifiedLines.txt');