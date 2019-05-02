'use strict';

import { Aircraft } from './Aircraft';

export class Carrier {
  ammoStorage: number;
  hp: number;
  aircrafts: Aircraft[] = [];

  constructor(ammoStorage: number, hp: number) {
    this.ammoStorage = ammoStorage;
    this.hp = hp;
  }

  add(type: string): void {
    this.aircrafts.push(new Aircraft(type));
  }

  fill(): void {
    let ammoNeeded = 0;
    this.aircrafts.forEach((a: Aircraft) => ammoNeeded += (a.maxAmmo - a.currentAmmo));
    if (ammoNeeded < this.ammoStorage) {
      this.aircrafts.forEach((a: Aircraft) => a.refill(this.ammoStorage));
      this.ammoStorage -= ammoNeeded;
    } else {
      this.aircrafts.forEach((a: Aircraft) => a.hasPriority ? this.ammoStorage = a.refill(this.ammoStorage) : false);
      this.aircrafts.forEach((a: Aircraft) => a.hasPriority ? false : this.ammoStorage = a.refill(this.ammoStorage));
      this.ammoStorage = 0;
    }
  }

  fight(another: Carrier): void {
    let thisDamage: number = 0
    this.aircrafts.forEach((x: Aircraft) => thisDamage += (x.currentAmmo * x.baseDamage));
    this.aircrafts.forEach((x: Aircraft) => x.currentAmmo = 0);
    another.hp -= thisDamage;
  }

  getTotalDamage(): number {
    let totalDamage: number = 0
    this.aircrafts.forEach((x: Aircraft) => totalDamage += (x.currentAmmo * x.baseDamage));
    return totalDamage;
  }

  getStatus(): string {
    return `HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammoStorage}, Total damage: ${this.getTotalDamage()}\nAircrafts:\n${this.aircrafts.map((x: Aircraft) => x.status()).join('\n')}`;
  }
}