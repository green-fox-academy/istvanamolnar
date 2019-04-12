'use strict';
export{};
// Boilerplate
const canvas: any = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

let arrayOfColors: string[] = ['Yellow', 'Olive', 'Lime', 'Green', 'Aqua', 'Teal', 'Blue', 'Navy', 'Fuchsia', 'Purple', 'Navy', 'Blue', 'Aqua', 'Teal', 'Olive', 'Green', 'Lime', 'Yellow', 'Orange', 'Red', 'Maroon', 'Fuchsia', 'Purple', 'Black', 'Silver', 'Gray'];
function getRandomInt(num: number): any {
  return Math.floor(Math.random() * Math.floor(num));
}

function drawSquare(a: number, b: number, c: number, z: string) {
  ctx.fillStyle = z;
  ctx.fillRect(a, b, c, c);
}

function fractalSquares(i: number) {
//top line
  drawSquare(i / 3, i / 3, i / 3, arrayOfColors[getRandomInt(26)]);
  drawSquare(i / 9, i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  drawSquare( 4 * i / 9, i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
// middle line
  drawSquare(7 * i / 9, i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  drawSquare(i / 9, 4 * i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  drawSquare(7 * i / 9, 4 * i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
// bottom line
  drawSquare(1 * i / 9, 7 * i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  drawSquare(4 * i / 9, 7 * i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  drawSquare(7 * i / 9, 7 * i / 9, i / 9, arrayOfColors[getRandomInt(26)]);
  fractalSquares(i / 3);
}

/*
function fractalSquares(x: number, y: number, z: number) {
  drawSquare(x + z / 3, y + z / 3, z / 3, arrayOfColors[getRandomInt(26)]);
  fractalSquares(x, y, z / 3);
}*/
/*
function fractalSquares()
*/
fractalSquares(600);