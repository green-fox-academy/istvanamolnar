'use strict';
import {Domino} from "./Domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
let newDominoes: number[][] = initializeDominoes().map(x => x.values);
let arrangedDominoes: number[][] = [newDominoes[0]];
console.log(initializeDominoes());
console.log(newDominoes);
for (let i = 1; i < newDominoes.length; i++) {
  for (let j = 1; j < newDominoes.length; j++) {
    newDominoes[j][0] === arrangedDominoes[arrangedDominoes.length - 1][1] ? arrangedDominoes.push(newDominoes[j]) : false;
  }
}

console.log(arrangedDominoes);