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
  let guess: number[] = readlineSync.question('Enter four different, single digit integers: ').split('').map((x: string) => parseInt(x));
  return guess;
}
function cattleCounter(secret: number[]): any { //main function, compares guesses with the secret numbers
  const guess: number[] = guesser();
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
  roundCounter++
  prevGuess += `=> ${guess.join(' ')} <= | Bulls: ${Cattle.bull}, Cows: ${Cattle.cow} |\n`;
  console.log(prevGuess);
  return Cattle.bull === 4 ? console.log(`You\'ve won in ${roundCounter} rounds. GG WP CU later!`) : cattleCounter(secret);
}

const secret: number[] = getSecretArray();
//console.log(secret);
let prevGuess: string = '';
let roundCounter: number = 0;
cattleCounter(secret);
