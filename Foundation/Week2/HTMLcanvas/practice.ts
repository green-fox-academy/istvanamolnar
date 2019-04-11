'use strict';
export{};
// Boilerplate
const canvas: any = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

// red line in the middle.
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(600, 300);
ctx.stroke();
//blue diagonal
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(0, 600);
ctx.lineTo(600, 0);
ctx.stroke();
//green diagonal
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(600, 600);
ctx.lineTo(0, 0);
ctx.stroke();

// draw a box that has different colored lines on each edge.
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 110);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(10, 110);
ctx.lineTo(110, 110);
ctx.stroke();

ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(110, 110);
ctx.lineTo(110, 10);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(110, 10);
ctx.lineTo(10, 10);
ctx.stroke();

//// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw x lines with that function. Use loop for that.
function drawLine(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 300);
    ctx.stroke();
}
for (let x = 100; x <= 500; x += 50) {
    for (let y = 200; y <= 400; y += 200) {
        drawLine(x, y);
    }
}
// Draw some squares with random color
function drawSquare(a: number, b: number, c: number, z: string) {
    ctx.fillStyle = z;
    ctx.fillRect(a, b, c, c);
}
let arrayOfColors: string[] = ['Yellow', 'Olive', 'Lime', 'Green', 'Aqua', 'Teal', 'Blue', 'Navy', 'Fuchsia', 'Purple', 'Navy', 'Blue', 'Aqua', 'Teal', 'Olive', 'Green', 'Lime', 'Yellow', 'Orange', 'Red', 'Maroon', 'Fuchsia', 'Purple', 'Black', 'Silver', 'Gray'];
function getRandomInt(num: number): any {
    return Math.floor(Math.random() * Math.floor(27));
}

let sizeOfSquare = 9; 
let i: number = 300;
while (i < 600) {
    drawSquare(i - 300, i, sizeOfSquare, arrayOfColors[getRandomInt(27)]);
    i += sizeOfSquare;
    sizeOfSquare += 1;
}
let size: number = 156
let s: number = 120; 
while (size > 12) {
    drawSquare(540 - s, 540 - s, size, arrayOfColors[getRandomInt(9)]);
    size -= 12;
    s -= 6;
}