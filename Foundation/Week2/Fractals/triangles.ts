'use strict';
//export{};
// Boilerplate
const canvas: any = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx: any = canvas.getContext('2d');

let arrayOfColors: string[] = ['Yellow', 'Olive', 'Lime', 'Green', 'Aqua', 'Teal', 'Blue', 'Navy', 'Fuchsia', 'Purple', 'Navy', 'Blue', 'Aqua', 'Teal', 'Olive', 'Green', 'Lime', 'Yellow', 'Orange', 'Red', 'Maroon', 'Fuchsia', 'Purple', 'Black', 'Silver', 'Gray'];
function getRandomInt(num: number): any {
  return Math.floor(Math.random() * Math.floor(num));
}

function drawTriangle(x: number, y: number, z: number) {
  if (z < 5) {return;}
  ctx.strokeStyle = arrayOfColors[getRandomInt(25)];
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + z, y);
  ctx.lineTo(x + z / 2, y + z);
  ctx.lineTo(x, y);
  ctx.stroke();

  drawTriangle(x, y, z / 2);
  drawTriangle(x + z / 2, y, z / 2);
  drawTriangle(x + z / 4, y + z / 2, z / 2);
}

drawTriangle(0, 0, 600);

