'use strict';

export class Flower {
  color: string;
  waterAmount: number;

  constructor(color: string, waterAmount: number = 0) {
    this.color = color;
    this.waterAmount = waterAmount;
  }
}