'use strict';

const fs = require('fs');

const fileContent = fs.readFileSync('decrypt.txt', 'utf-8').split('\n');
let code = [];
let solution = [];
for (let i = 0; i < fileContent.length; i++) {
  for (let j = 0; j < fileContent[i].length; j++) {
    code.push(fileContent[i].codePointAt(j));
  }
  code.push('\n');
}
for (let k = 0; k < code.length; k++) {
  code[k] === '\n' ? solution.push(' \n ') : solution.push(String.fromCharCode(code[k]));
}
console.log(fileContent, code, solution.join(''));