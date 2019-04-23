'use strict';

export class Tree {
  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number = 0) {
    this.color = color;
    this.waterAmount = waterAmount;
    this.needsWater = this.waterAmount < 10;
  }

  addWater(amount: number): void {
    this.waterAmount += 0.4 * amount;
    this.needsWater = this.waterAmount < 10;
  }
}