'use strict';

import { Pirate } from './Pirate';

export class Ship {
  pirates: Pirate[] = [];

  addPirate(name: string, gold: number, hp?: number, hasWoodenleg?: boolean): any {
    this.pirates.push(new Pirate(name, gold, hp, hasWoodenleg));
  }

  promoteCaptain(): void {
    this.pirates[Math.floor(Math.random() * Math.floor(this.pirates.length))].isCaptain = true;
  }

  getPoorPirates(): Pirate[] {
    return this.pirates.filter((pirate: Pirate) => pirate.hasWoodenLeg && pirate.gold < 15);
  }

  getGolds(): number {
    let sumOfGold: number = 0;
    this.pirates.forEach((pirate: Pirate) => sumOfGold += pirate.gold);
    return sumOfGold;
  }

  lastDayOnTheShip(): void {
    this.pirates.forEach((pirate: Pirate) => pirate.party())
  }

  prepareForBattle(): void {
    for (let i = 0; i < 5; i++) {
      this.pirates.forEach((pirate: Pirate) => pirate.work());
    }
    this.lastDayOnTheShip();
  }
}
