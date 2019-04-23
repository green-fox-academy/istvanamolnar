'use strict';

export class Flower {
  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number = 0) {
    this.color = color;
    this.waterAmount = waterAmount;
    this.needsWater = this.waterAmount < 5;
  }

  addWater(amount: number): void {
    this.waterAmount += 0.75 * amount;
    this.needsWater = this.waterAmount < 5;
  }
}



const lohere: Flower = new Flower('green');
console.log(lohere);
