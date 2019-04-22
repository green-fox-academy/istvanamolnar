'use strict';

export class Pirate {
  name: string;
  origin: string;
  isDrunk: boolean;
  isDead: boolean = false;
  shotsOfRum: number = Math.floor(Math.random() * Math.floor(15));
  isCaptain: boolean;
  
  constructor(name: string, origin: string, isDrunk: boolean = false, isCaptain: boolean = false) {
    this.name = name;
    this.origin = origin;
    this.isDrunk = this.shotsOfRum > 6;
    this.isCaptain = isCaptain;
  }

  drinkSomeRum(num: number): void {
    this.shotsOfRum += num;
    this.isDrunk = this.shotsOfRum > 6;
    this.isDead = this.shotsOfRum > 20;
  }

  howsItGoingMate(): string {
    return this.shotsOfRum < 7 ? 'Pour me anudder!' : 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
  }

  kill(): any {
    return this.isDead ? console.log(`${this.name} is dead`) : (this.isDead = true) && console.log(`${this.name} is dead`);
  }
}

// const FirstPirate: Pirate = new Pirate('Bob', 1, 'Cuba', false, true);
// console.log(FirstPirate);
// FirstPirate.drinkSomeRum(3);
// console.log(FirstPirate);
// FirstPirate.kill();
// console.log(FirstPirate);
