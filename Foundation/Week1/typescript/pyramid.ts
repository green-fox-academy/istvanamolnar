"use strict";

// Write a program that draws a pyramid

function repeatSpace(string, num) {
    for (let i = 0; i < num; i++) {
        string += " ";
    }
    return string;
}

let lineCounter: number = 5;
let space: string = "";
let stars: string = "*";
let counter2: number = lineCounter;
for (let i = lineCounter; i > 0; i--) {
    console.log(repeatSpace(space, i), stars);
    stars += "**";
}