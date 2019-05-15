'use strict';

import { Game } from '../Class/Game';
import { Action } from '../Class/Action';

// Acquire the rendering context

export const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');

const floor = document.getElementById('floor') as HTMLImageElement;
const wall = document.getElementById('wall') as HTMLImageElement;
const heroUp = document.getElementById('hero-up') as HTMLImageElement;
const heroRight = document.getElementById('hero-right') as HTMLImageElement;
const heroDown = document.getElementById('hero-down') as HTMLImageElement;
const heroLeft = document.getElementById('hero-left') as HTMLImageElement;
const boss = document.getElementById('boss') as HTMLImageElement;
const skeleton = document.getElementById('skeleton') as HTMLImageElement;
const heroFaces: HTMLImageElement[] = [heroUp, heroRight, heroDown, heroLeft]

// Drawing game screen
function drawScreen(): void {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (game.map[i][j] === 0){
        ctx.drawImage(wall, j * 72, i * 72);
      } else if (game.map[i][j] === 1) {
        ctx.drawImage(floor, j * 72, i * 72);
      } else if (game.map[i][j] === 10) {
        ctx.drawImage(floor, j * 72, i * 72);
        ctx.drawImage(heroDown, j * 72, i * 72);
      } else if (game.map[i][j] === 20) {
        ctx.drawImage(floor, j * 72, i * 72);
        ctx.drawImage(skeleton, j * 72, i * 72);
      } else if (game.map[i][j] === 30) {
        ctx.drawImage(floor, j * 72, i * 72);
        ctx.drawImage(boss, j * 72, i * 72);
      } else {
        ctx.drawImage(wall, j * 72, i * 72);
      }
    }
  }
}
let game = new Action(10);
drawScreen();

 // Function to handle the key press events
function onKeyPress(event: any) {
  switch (event.keyCode) {
    case 37: // left
      game.moveAllEnemies();
      game.moveHero(2);
      drawScreen();
      break;
    case 38: // up
      game.moveHero(0);
      drawScreen();
      break;
    case 39: // right
      game.moveAllEnemies();
      game.moveHero(3);
      drawScreen();
      break;
    case 40: // down
      game.moveHero(1);
      drawScreen();
      break;
    case 32: // space
      game.moveHero(4);
      drawScreen();
      break;
  }
}
// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);