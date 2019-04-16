'use strict';

const fs: any = require('fs');

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
//let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
//console.log(fileContent);

let fileContent: any = fs.readFileSync('my-file.txt', 'utf-8');
console.log(fileContent);


// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function putMyName(file: any) {
  const myName: string = 'Istvan Molnar\nnem\nertem\nmi\ntortenik';
  fs.writeFileSync(file, myName);
}
putMyName('my-file.txt');
/* try {
  fs.writeFileSync('my-file.txt');
} catch (error) {
  console.log('Unable to write file: my-file.txt');
} */

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines(file: any) {
  const fileContent2: any = fs.readFileSync(file, 'utf-8');
  return fileContent2.split('\n').length;
}
console.log(countLines('my-file.txt'));