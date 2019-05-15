'use strict';

import { Character } from './Character';
import { ICharacter } from './Interface/ICharacter';

export class Boss extends Character implements ICharacter {
  level: number;
  maxHP: number;
  currentHP: number;
  SP: number;
  DP: number;
  posI: number;
  posJ: number;
  hasTheKey: boolean;

  constructor(level: number, posI: number, posJ: number, maxHP?: number, currentHP?: number, DP?: number, SP?: number, hasTheKey: boolean = false) {
    super();
    this.level = level;
    this.maxHP = this.d(6) * this.level * 2 + this.d(6);
    this.currentHP = this.maxHP;
    this.SP = this.d(6) * this.level + this.level;
    this.DP = this.d(6) * (this.level / 2) + this.d(6) / 2;
    this.posI = posI;
    this.posJ = posJ;
  }
}
