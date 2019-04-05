"use strict";


// Repeats a given character, num times and adds it to a string
function repeat(character: string, string: string, num: number) {
    for (let i = 0; i < num; i++) {
        string += character;
    }
    return string;
}


// Write a program that draws a pyramid
function drawPyramid(numberOfLines:number) {
    let space: string = "";
    let star: string = "*";
    let counter2: number = numberOfLines;
    for (let i = numberOfLines; i > 0; i--) {
        console.log(repeat(" ", space, i), star);
        star += "**";
    }
}
//drawPyramid(6);

// Write a program that draws a square like this:
function drawSquare(numberOfLines: number) {
    let space: string = "";
    console.log(repeat("%", space, numberOfLines));
    for (let i = 0; i < numberOfLines - 2; i++) {
        console.log("%" + repeat(" ", space, numberOfLines - 2) + "%");
    }
    console.log(repeat("%", space, numberOfLines));
}
//drawSquare(8);


// Write a program that draws a square with a diagonal
function drawSquareWithDiagonal(numberOfLines: number) {
    let space: string = "";
    let percent: string = "%";
    console.log(repeat("%", space, numberOfLines));
    for (let i = 0; i < numberOfLines - 2; i++) {
        console.log("%" + repeat(" ", space, i) + "%" + repeat(" ", space, numberOfLines - 3 - i) + "%");
    }
    console.log(repeat("%", space, numberOfLines));
}
//drawSquareWithDiagonal(10);