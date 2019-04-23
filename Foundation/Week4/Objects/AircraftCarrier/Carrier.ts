'use strict';

import { Aircraft } from './Aircraft';

class Carrier {
  aircrafts: Aircraft[] = [];
  ammoStorage: number;
  healthPoint: number;

  constructor(ammoStorage: number, healthPoint: number) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(ammo: number) {
    this.aircrafts.forEach(aircraft => aircraft.isPriority && this.ammoStorage > ammo ? this.ammoStorage -= aircraft.refill(ammo) : false);
  }

  fight(carrier: Carrier): any {
    this.aircrafts.forEach(aircraft => carrier.healthPoint -= aircraft.fight());
    console.log(carrier.healthPoint);
  }

  totalDamage(): void {
    let totalDamage = 0;
    this.aircrafts.forEach(aircraft => totalDamage += aircraft.damage * aircraft.currentAmmo);
  }

  getStatus(carrier: Carrier) {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total damage: ${this.totalDamage}. \n Aircrafts: ${this.aircrafts}`)
  }

}