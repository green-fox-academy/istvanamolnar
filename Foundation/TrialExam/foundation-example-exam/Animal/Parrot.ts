'use strict';

import { Animal } from './Animal';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export class Parrot extends Animal {
  constructor(ownerName: string, isHealthy: boolean, healCost: number = getRandomInt(5, 10), name?: string) {
    super(ownerName, isHealthy, healCost);
    this.name = name || this.constructor.name;
  }
}
