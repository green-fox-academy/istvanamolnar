'use strict';

function getSecretArray(): number[] { //generates the array of the secret numbers
  let arrayOfNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cabArray: number[] = [];
  for (let i: number = 0; i < 4; i++) {
    let randomIndex: number = Math.floor(Math.random() * 10 - i);
    randomIndex = randomIndex >= 0 ? randomIndex : -randomIndex;
    cabArray.push(arrayOfNumbers[randomIndex]);
    arrayOfNumbers.splice(arrayOfNumbers.indexOf(cabArray[i]), 1);    
  }
  return cabArray;
}
function guesser(): number[] { //takes and prints guesses
  let readlineSync = require('readline-sync');
  let guess: number[] = readlineSync.question('Enter four single digit integers: ').split('').map((x:string) => parseInt(x));
  return guess;
}
function cattleCounter(secret: number[]): any {
  const guess: number[] = guesser();
  prevGuess += guess + '\n';
  let Cattle: any = {
    'bull': 0,
    'cow': 0
  }
  for (let i in secret) {
    for (let j in guess) {
      if (secret[i] === guess[j] && i === j) {
        Cattle.bull++;
      } else if (i != j && secret[i] === guess[j]) {
        Cattle.cow++;
      }
    }
  }
  console.log(`${prevGuess}   Bulls: ${Cattle.bull}, Cows: ${Cattle.cow}`)
  return Cattle.bull === 4 ? console.log('GG WP') : cattleCounter(secret);
}

const secret: number[] = getSecretArray();
console.log(secret);
let prevGuess: string = '';
cattleCounter(secret);