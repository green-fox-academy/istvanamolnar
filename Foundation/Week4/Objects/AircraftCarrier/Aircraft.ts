'use strict';

export class Aircraft {
  type: string;
  maxAmmo: number;
  currentAmmo: number;
  baseDamage: number;
  hasPriority: boolean;

  constructor(type: string, maxAmmo?: number, baseDamage?: number, hasPriority?: boolean, currentAmmo: number = 0) {
    this.type = type;
    this.baseDamage = this.type === 'F16' ? 30 : 50;
    this.maxAmmo = this.type === 'F16' ? 8 : 12;
    this.currentAmmo = currentAmmo;
    this.hasPriority = this.type === 'F35';
  }

  fight(): number {
    let damageDealt: number = this.currentAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return damageDealt;
  }

  refill(num: number): number {
    let ammoRequired: number = this.maxAmmo - this.currentAmmo;
    if (num >= ammoRequired) {
      this.currentAmmo = this.maxAmmo;
      num -= ammoRequired;
    } else {
      this.currentAmmo = num;
      num = 0
    }
    return num;
  }

  getType(): string {
    return this.type; 
  }

  status(): string {
    return `Type: ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}, Priority: ${this.isPriority()}`;
  }

  isPriority(): boolean {
    return this.hasPriority;
  }
}