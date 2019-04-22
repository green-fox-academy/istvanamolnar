'use strict';
import { Pirate } from './Pirate';

const names: string[] = ['Bashed', 'Soft Heart', 'Imposter', 'Black Beard', 'Cranky', 'Vicious', 'Fierce', 'No-Fingers', 'The Slug', 'Dawg'];
const origin: string[] = ['England', 'Netherlands', 'France', 'China', 'Norway', 'Turkey', 'Portugal', 'Spain', 'Denmark', 'Scotland'];
const shipName: string[] = ['Bacchante', 'Amarylis', 'Unrivalled', 'Orcadia']

class Ship {
  name: string;
  crew: Pirate[] = [];
  constructor(name: string) {
    this.name = name;
  }

  fillShip(num: number): void {
    for (let i= 0; i < num; i++) {
      this.crew.push(new Pirate(names[Math.floor(Math.random() * Math.floor(names.length))], origin[Math.floor(Math.random() * Math.floor(origin.length))]));
    }
    this.crew[Math.floor(Math.random() * Math.floor(this.crew.length))].isCaptain = true;  // random pirate promoted
  }

  state(): any {
    return this.crew.filter(x => x.isCaptain);
    // return Pirate.captain.name;
  }

}
const ShipOne = new Ship(shipName[Math.floor(Math.random() * Math.floor(shipName.length))]);
ShipOne.fillShip(5);
//console.log(ShipOne);
const captain: Pirate = ShipOne.state().name;
console.log(captain);