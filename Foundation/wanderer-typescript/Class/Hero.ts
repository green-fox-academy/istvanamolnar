'use strict';

import { Character } from './Character';
import { ICharacter } from './Interface/ICharacter';

export class Hero extends Character implements ICharacter {
  level: number = 1;
  maxHP: number = this.d(6) * 3 + 20;
  currentHP: number = this.maxHP;
  SP: number = this.d(6) + 5;
  DP: number = this.d(6) * 2;
  posI: number = 0;
  posJ: number = 0;
  hasTheKey: boolean = false;

  levelUp(): void {
    let luck: number = this.d(10);
    if (luck < 2) {
      this.currentHP = this.maxHP;
    } else if (luck >= 2 && luck < 6) {
      this.currentHP += (this.maxHP / 3);
    } else {
      this.currentHP += (this.maxHP / 10);
    }
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }
    this.level++;
  }
}