'use strict';

export class Pirate {
  name: string;
  gold: number;
  hp: number;
  hasWoodenLeg: boolean;
  isCaptain: boolean;

  constructor(name: string, gold: number, hp: number = 10, hasWoodenleg?: boolean, isCaptain: boolean = false) {
    this.name = name;
    this.gold = gold;
    this.hp = hp;
    this.hasWoodenLeg = (Math.round(Math.random()) === 1);
    this.isCaptain = isCaptain;
  }

  work(): void {
    this.hp -= (this.isCaptain ? 5 : 1);
    this.gold += (this.isCaptain ? 10 : 1);
  }

  party(): void {
     this.hp += (this.isCaptain ? 10 : 1);
  }

  toString(): string {
    return `Hello, I'm ${this.name}. I ${this.hasWoodenLeg ? 'have a wooden leg' : 'still have my real legs'} and ${this.gold} golds.`
  }
}
