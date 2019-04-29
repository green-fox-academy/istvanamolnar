'use strict';

const fs: any = require('fs');

let array: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

function countSwearwords(array: string[], filename: string): any {
  let fileContent: string[] = fs.readFileSync(filename, 'UTF-8').split(' ');
  let swearWords: string[] = [];
  for (let i: number = 0; i < array.length; i++) {
    fileContent.forEach((word: string) => word.indexOf(array[i]) !== -1 ? swearWords.push(word) : false);
  }
  for (let i: number = 0; i < array.length; i++) {
    fileContent = fileContent.filter((word: string) => word.search(array[i]));
  }
  const censored: string = fileContent.join(' ');
  fs.writeFileSync('censored.txt', censored);
  return swearWords.length;
}

console.log(countSwearwords(array, "content.txt"));
