'use strict';

import {Garden} from './Garden';
import {Tree} from './Tree';
import {Flower} from './Flower';

let myGarden = new Garden()

myGarden.addPlant(new Flower('sarga'));
myGarden.addPlant(new Flower('piros'));
myGarden.addPlant(new Tree('feher'));
myGarden.addPlant(new Tree('zold'));

console.log(myGarden);

myGarden.watering(40);

console.log(myGarden);

myGarden.watering(70);

console.log(myGarden);