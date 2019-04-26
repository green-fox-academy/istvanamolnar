'use strict';

const fs: any = require('fs');

function findMostCommonChars(filename: string): object {
  const fileContent: string[] = fs.readFileSync(filename, 'UTF-8').toLowerCase().split('');
  const charsOnly: string[] = fileContent.filter((char: string) => char != '\n' && char != ' '); //remove newline and space

  let arrayOfChars: any = charsOnly.map(x => [x, 0]);

  // create an array of characters and their ocurrence;
  for (let i = 0; i < arrayOfChars.length; i++) {
    for (let j: number = i; j < arrayOfChars.length; j++) {
      arrayOfChars[i][0] === arrayOfChars[j][0] ? arrayOfChars[i][1]++ && arrayOfChars.splice(j, 1) && j-- : false;
    }
  }

  // sort chars by ocurrence
  arrayOfChars.sort((a: number[], b: number[]) => b[1] - a[1]);

  // add two most common chars to the object
  let ObjOfTwoTopChars: object = {};
  for (let i: number = 0; i < 2; i++) {
    ObjOfTwoTopChars[arrayOfChars[i][0]] = arrayOfChars[i][1];
  }

  return ObjOfTwoTopChars;
}

try {
  findMostCommonChars('countchar.txt');
} catch (e) {
  if (e.code === 'ENOENT') {
    console.log('File does not exist!');
  }
}
