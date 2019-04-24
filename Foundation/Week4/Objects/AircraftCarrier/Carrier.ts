'use strict';

import { Aircraft } from './Aircraft';

export class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStorage: number;
  healthPoint: number;

  constructor(ammoStorage: number, healthPoint: number) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
  }

  add(x: number, y: number): void {
    this.aircrafts.push(new Aircraft(x, y));
  }

  fill(ammo: number) {
    this.aircrafts.forEach(aircraft => this.ammoStorage -= aircraft.refill(ammo));
  }

  fight(carrier: Carrier): any {
    this.aircrafts.forEach(aircraft => carrier.healthPoint -= aircraft.fight());
    console.log(carrier.healthPoint ? `Your HP is ${carrier.healthPoint}` : `You are dead`);
  }

  totalDamage(): number {
    let totalDamage = 0;
    this.aircrafts.forEach(aircraft => totalDamage += aircraft.damage * aircraft.currentAmmo);
    return totalDamage;
  }

  getStatus() {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage: ${this.totalDamage()}. \n Aircrafts: ${this.aircrafts}`)
  }

}