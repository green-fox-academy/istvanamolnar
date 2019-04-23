'use strict';

import {Garden} from './Garden';
import {Tree} from './Tree';
import {Flower} from './Flower';

let myGarden = new Garden()

myGarden.addPlant(new Flower('lohere'));
myGarden.addPlant(new Flower('utifu'));
myGarden.addPlant(new Tree('akac'));
myGarden.addPlant(new Tree('fuz'));

console.log(myGarden);

myGarden.watering(40);

console.log(myGarden);

myGarden.watering(70);

console.log(myGarden);