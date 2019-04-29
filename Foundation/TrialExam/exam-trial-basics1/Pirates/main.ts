'use strict';

import { Pirate } from './Pirate';
import { Ship } from './Ship'

let Firstship = new Ship();
const Pirate1: Pirate = Firstship.addPirate('Jack', 20);
const Pirate2: Pirate = Firstship.addPirate('Johnny', 20);
const Pirate3: Pirate = Firstship.addPirate('Jane', 20);
const Pirate4: Pirate = Firstship.addPirate('James', 20);
const Pirate5: Pirate = Firstship.addPirate('John', 20);
Firstship.promoteCaptain();
//Firstship.pirates.forEach(x => console.log(x.work()));
console.log(Firstship);
Firstship.prepareForBattle();
console.log(Firstship);


