'use strict';
import { Tree } from './Tree';
import { Flower } from './Flower';

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
    let counter: number = 0;
    this.plants.forEach(plant => plant.needsWater ? counter++ : false)
    this.plants.forEach(plant => plant.needsWater ? plant.addWater(amountOfWater / counter) : false);
    this.statusOfGarden();
  }

  statusOfGarden(): void {
    for (let item in this.plants) {
      console.log(`The ${this.plants[item].color} ${this.plants[item].constructor.name} ${this.plants[item].needsWater ? 'needs' : 'doesnt need'} water`);
    }
  }

}
