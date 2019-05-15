'use strict';

import { ICharacter } from './Interface/ICharacter';

export abstract class Character implements ICharacter {
  abstract level: number;
  abstract maxHP: number;
  abstract currentHP: number;
  abstract DP: number;
  abstract SP: number;
  abstract posI: number;
  abstract posJ: number;
  abstract hasTheKey: boolean;

  status(): string {
    return `${this.constructor.toString().match(/\w+/g)[1]} (Level ${this.level}): HP: ${this.currentHP}/${this.maxHP} | DP: ${this.DP} | SP: ${this.SP}`;
  };
  
  d(num: number): number {
    return Math.floor(Math.random() * (num)) + 1;
  }

  leveling(): void {   // ?????????????????????
    let amount: number = this.d(6);
    this.maxHP += amount;
    this.currentHP += amount;
    this.DP += this.d(6);
    this.SP += this.d(6);
  }
}