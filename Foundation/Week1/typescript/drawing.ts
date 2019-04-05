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
function drawPyramid(numberOfLines: number) {
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
function drawTop(numberOfLines: number) {
    let half: number = numberOfLines / 2;
    let star: string = "*";
    if (half % 1) {
        for (let i = half - 0.5; i >= 0; i--) {
            console.log(repeat(" ", i) + star);
            star += "**";
        }
    } else {
        for (let i = half - 1; i >= 0; i--) {
            console.log(repeat(" ", i) + star);
            star += "**";
        }
    }
}
function drawBottom(numberOfLines: number) {
    let half: number = numberOfLines / 2;
    if (half % 1) {
        let stars: string = repeat("*", (half - 0.5) * 2 - 1);
        for (let i = 1; i <= half - 0.5; i++) {
            console.log(repeat(" ", i) + stars);
            stars = stars.slice(0, stars.length - 2);
        }
    } else {
        let stars: string = repeat("**", half - 1) + "*";
        for (let i = 0; i <= half; i++) {
            console.log(repeat(" ", i) + stars);
            stars = stars.slice(0, stars.length - 2);
        }
    }
}
function drawDiamond(numberOfLines: number) {
    drawTop(numberOfLines);
    drawBottom(numberOfLines);
}
//drawDiamond(14);