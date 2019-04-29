'use strict';

import { Animal } from './Animal';

export class Cat extends Animal {
  constructor(ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 7), name?: string) {
    super(ownerName, isHealthy, healCost);
    this.name = name || this.constructor.name;
  }
}

