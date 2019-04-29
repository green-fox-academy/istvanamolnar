'use strict';

import { Animal } from './Animal';
import { Cat } from './Cat'
import { Dog } from './Dog';
import { Parrot } from './Parrot';
import { Shelter } from './Shelter';

const first = new Cat('p', false);
const second = new Cat('s', false);
const third = new Cat('r', true);
const fourth = new Dog('v', false);
const fifth = new Dog('h', true);
const sixth = new Parrot('w', false);
const seventh = new Parrot('q', true);


let shelter = new Shelter();

shelter.rescue(first);
shelter.rescue(second);
shelter.rescue(third);
shelter.rescue(fourth);
shelter.rescue(fifth);
shelter.rescue(sixth);
shelter.rescue(seventh);
shelter.addAdopter('jozsi');
shelter.addAdopter('feri');
shelter.addAdopter('sanyi');
shelter.addAdopter('zoli');
shelter.findNewOwner();
//console.log(shelter);

shelter.toString();