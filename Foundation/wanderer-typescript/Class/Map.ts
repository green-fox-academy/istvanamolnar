'use strict';

import { IMap } from './Interface/IMap';

export class Map implements IMap {
  mapSize: number;
  map:  number[][];
  private i: number = 0;
  private j: number = 0;
  private counter: number = 0;

  constructor(mapSize: number, map: number[][] = []) {
    this.mapSize = mapSize;
    this.map = map;
    //this.randomMap = this.setRandomMap(this.map);
    this.setMap();
    this.setRandomMap();
  }
  
  setMap(): void {
    for (let i = 0; i < this.mapSize; i++) {
      this.map.push([]);
      for (let j = 0; j < this.mapSize; j++) {
        this.map[i].push(0);
      }
    }
    this.map[0][0] = 10;
  }

  setRandomMap(): number[][] {
    let randomDirection: number = Math.floor(Math.random() * (4));
    if (this.counter > 200) { return this.map }
    
    if (randomDirection === 0 && (this.i > 2 && this.map[this.i - 3][this.j] === 0)) {
      this.map[this.i - 1][this.j] = 1;
      this.map[this.i - 2][this.j] = 1;
      this.map[this.i - 3][this.j] = 1;
      this.i -= 1;
    } else if (randomDirection === 1 && (this.i < 7 && this.map[this.i + 3][this.j] === 0)) {
      this.map[this.i + 1][this.j] = 1;
      this.map[this.i + 2][this.j] = 1;
      this.map[this.i + 3][this.j] = 1;
      this.i += 1;
    } else if (randomDirection === 2 && (this.j > 2 && this.map[this.i][this.j - 3] === 0)) {
      this.map[this.i][this.j - 1] = 1;
      this.map[this.i][this.j - 2] = 1;
      this.map[this.i][this.j - 3] = 1;
      this.j -= 1;
    } else if (randomDirection === 3 && (this.j < 7 && this.map[this.i][this.j + 3] === 0)) {
      this.map[this.i][this.j + 1] = 1;
      this.map[this.i][this.j + 2] = 1;
      this.map[this.i][this.j + 3] = 1;
      this.j += 1;
    }
    this.counter++;
    this.setRandomMap();
  }
}
