'use strict';

export class Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;
  name: string;

  constructor(ownerName: string, isHealthy: boolean, healCost: number, name?: string) {
    this.ownerName = ownerName;
    this.isHealthy = isHealthy;
    this.healCost = healCost;
    this.name = name || this.constructor.name;
  }

  heal(): void {
    this.isHealthy = true;
  }

  isAdoptable(): boolean {
    return this.isHealthy;
  }

  toString() {
    return `${this.name} is ${this.isHealthy ? 'healthy, and ' : 'not healthy, and not '}adoptable\n`
  }
}
