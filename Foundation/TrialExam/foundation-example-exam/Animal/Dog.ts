'use strict';

import { Animal } from './Animal';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export class Dog extends Animal {
  constructor(ownerName: string, isHealthy: boolean, healCost: number = getRandomInt(2, 8), name?: string) {
    super(ownerName, isHealthy, healCost);
    this.name = name || this.constructor.name;
  }
}