'use strict';

class Pirate {
  name: string;
  numOfLegs: number;
  origin: string;
  isDrunk: boolean;
  isDead: boolean = false;
  shotsOfRum: number = 3;
  
  constructor(name: string, numOfLegs: number, origin: string, isDrunk: boolean) {
    this.name = name;
    this.numOfLegs = numOfLegs;
    this.origin = origin;
    this.isDrunk = isDrunk;
  }

  drinkSomeRum(num: number): void {
    this.shotsOfRum += num;
    this.isDrunk = this.shotsOfRum > 5;
    this.isDead = this.shotsOfRum > 20;
  }

  howsItGoingMate(): string {
    return this.shotsOfRum < 7 ? 'Pour me anudder!' : 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
  }

  kill(): any {
    return this.isDead ? console.log(`${this.name} is dead`) : (this.isDead = true) && console.log(`${this.name} is dead`);
  }
}

const FirstPirate: Pirate = new Pirate('Bob', 1, 'Cuba', false);
console.log(FirstPirate);
FirstPirate.drinkSomeRum(3);
console.log(FirstPirate);
FirstPirate.kill();
console.log(FirstPirate);
