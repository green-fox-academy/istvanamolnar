'use strict';

export interface ICharacter {
  level: number;
  maxHP: number;
  currentHP: number;
  DP: number;
  SP: number;
  posI: number;
  posJ: number;
  hasTheKey: boolean;

  status(): string;
  d(num: number): number;
  leveling(): void;
}