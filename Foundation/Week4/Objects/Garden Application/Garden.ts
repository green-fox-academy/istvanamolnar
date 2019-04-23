'use strict';
import {Tree} from './Tree';
import {Flower} from './Flower';

export class Garden {
  plants: Tree[] & Flower[];

  constructor(plants: Tree[] & Flower[] = []) {
    this.plants = plants;
  }

  addPlant(plant: Tree | Flower): void {
    this.plants.push(plant);
  }

  watering(amountOfWater: number): void {
    console.log(`Watering with ${amountOfWater}`);
    this.plants.forEach(x => x.needsWater ? x.addWater(amountOfWater / this.plants.length) : false);
    this.statusOfGarden();
  }

  statusOfGarden(): void {
    for (let i in this.plants) {
      console.log(`The ${this.plants[i].color} ${this.plants[i]} ${this.plants[i].needsWater ? 'needs' : 'doesnt need'} water`);
    }
  }

}
