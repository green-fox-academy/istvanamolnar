'use strict';

export class Aircraft {
  currentAmmo: number;
  maxAmmo: number;
  damage: number;
  priority: boolean;

  constructor(maxAmmo: number, damage: number, ammo: number = 0, priority: boolean = false) {
    this.maxAmmo = maxAmmo;
    this.damage = damage;
    this.currentAmmo = ammo;
    this.priority = priority;
  }

  fight(): number {
    let damageDealt = this.currentAmmo * this.damage;
    this.currentAmmo = 0;
    return damageDealt;
  }

  refill(num: number): number {
    let ammoRequired: number = this.maxAmmo - this.currentAmmo;
    this.currentAmmo += ammoRequired;
    return num > ammoRequired ? num - ammoRequired : 0;
  }

  getType(aircraft: Aircraft): any {
    return aircraft.constructor.name;
  } 

  getStatus(aircraft: Aircraft): any {
    console.log(`Type ${this.getType(aircraft)}, Ammo: ${this.currentAmmo}, Base Damage: ${this.damage}, All Damage: ${this.fight()}`)
  }

  isPriority(aircraft: Aircraft): boolean {
    return this.priority = (aircraft.currentAmmo < 4);
  }
}

let F16: Aircraft = new Aircraft(8, 30);
let F35: Aircraft = new Aircraft(12, 50);

console.log(F16.isPriority(F16) + '\n' + F35.getType(F35));