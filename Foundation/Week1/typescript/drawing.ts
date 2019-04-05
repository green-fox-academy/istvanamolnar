"use strict";


// Repeats a given character, num times and adds it to a string
function repeat(character: string, num: number) {
    let string: string = "";
    for (let i = 0; i < num; i++) {
        string += character;
    }
    return string;
}


// Write a program that draws a pyramid
function drawPyramid(numberOfLines:number) {
    let star: string = "*";
    for (let i = numberOfLines; i > 0; i--) {
        console.log(repeat(" ", i), star);
        star += "**";
    }
}
//drawPyramid(6);

// Write a program that draws a square like this:
function drawSquare(numberOfLines: number) {
    console.log(repeat("%", numberOfLines));
    for (let i = 0; i < numberOfLines - 2; i++) {
        console.log("%" + repeat(" ", numberOfLines - 2) + "%");
    }
    console.log(repeat("%", numberOfLines));
}
//drawSquare(8);


// Write a program that draws a square with a diagonal
function drawSquareWithDiagonal(numberOfLines: number) {
    console.log(repeat("%", numberOfLines));
    for (let i = 0; i < numberOfLines - 2; i++) {
        console.log("%" + repeat(" ", i) + "%" + repeat(" ", numberOfLines - 3 - i) + "%");
    }
    console.log(repeat("%", numberOfLines));
}
//drawSquareWithDiagonal(10);

// Create a program that draws a chess table
function drawChessTable(numberOfLines: number) {
    if (numberOfLines % 2) {
        console.log("Please pass an even number");
    } else {
        for (let i = 0; i < numberOfLines / 2; i++) { 
            console.log("'" + repeat("% ", numberOfLines / 2) + "'");
            console.log("'" + repeat(" %", numberOfLines / 2) + "'");
        }
    }
}
//drawChessTable(8);

// Write a program that draws a diamond
function drawTop(numberOfLines:number) {
    let star: string = "*";
    for (let i = numberOfLines; i >= 0; i--) {
        console.log(repeat(" ", i), star);
        star += "**";
    }
}
function drawBottom(numberOfLines:number) {
    if (numberOfLines % 2) {
        let stars: string = repeat("*", numberOfLines * 2 - 2);
        for (let i = 1; i <= numberOfLines - 1; i++) {
            console.log(" " + repeat(" ", i), stars);
                stars = stars.slice(0, stars.length - 2);
        }
        console.log(repeat(" ", numberOfLines + 1) + "*");
    } else {
        let stars: string = repeat("*", numberOfLines * 2) + "*";
        for (let i = 0; i <= numberOfLines - 1; i++) {
            console.log(repeat(" ", i), stars);
                stars = stars.slice(0, stars.length - 2);
        }
        console.log(repeat(" ", numberOfLines + 1) + "*");
    }
}

function drawDiamond(numberOfLines: number) {
        drawTop(numberOfLines / 2);
        drawBottom(numberOfLines / 2);
}
drawDiamond(8);