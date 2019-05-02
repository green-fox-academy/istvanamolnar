'use strict';
const fs = require('fs');

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
function ticTacResult(file) {
  const fileContent = fs.readFileSync(file, 'utf-8').split('\n').map(x => x.split('')).filter(x => x.length);
  let reverse = fileContent.map(x => x.map(y => y === 'X' ? 'O' : 'X'));
  console.log(reverse);
  
}

ticTacResult('win-o.txt');
// Should print "O"
//console.log(ticTacResult('win-x.txt'))
// Should print "X"
//console.log(ticTacResult('draw.txt'))
// Should print "Draw"