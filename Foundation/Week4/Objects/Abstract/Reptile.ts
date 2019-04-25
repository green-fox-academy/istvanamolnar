'use strict';

import { Animal } from './Animal';

class Reptile extends Animal {
  teeth: string;
  isDomestic: boolean;
  constructor(name: string, isDomestic: boolean = false, teeth: string, age: number = Math.floor(Math.random() * 10)) {
    super(name, age);
    this.name = name;
    this.isDomestic = isDomestic;
    this.teeth = teeth;
  }

  breed(): string {
    return 'laying eggs';
  }
}

const Lizard: Reptile = new Reptile('Lizard', false, 'carnivore');

console.log(Lizard);
