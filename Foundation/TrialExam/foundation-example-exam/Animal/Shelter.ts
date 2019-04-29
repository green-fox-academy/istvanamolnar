'use strict';

import { Animal } from './Animal';
import { Cat } from './Cat'
import { Dog } from './Dog';
import { Parrot } from './Parrot';

export class Shelter {
  budget: number;
  animals: Animal[];
  adoptersName: string[];
  constructor(budget: number = 50, animals: Animal[] = [], adoptersName: string[] = []) {
    this.budget = budget;
    this.animals = animals;
    this.adoptersName = adoptersName;
  }

  rescue(animal: Animal): number {
    this.animals.push(animal);
    return this.animals.length;
  }

  heal(): void | string {
    let unHealthyAnimals: Animal[] = this.animals.filter((animal: Animal) => !animal.isHealthy);
    let firstUnhealthyAnimalHealingCost = unHealthyAnimals[0].healCost;
    if (this.budget - firstUnhealthyAnimalHealingCost < 0) {return 'Not Possible';}

    this.animals[this.animals.indexOf(unHealthyAnimals[0])].isHealthy = true;
  }

  addAdopter(name: string): void {
    this.adoptersName.push(name);
  }

  findNewOwner(): void | string {
    if (this.animals.length < 1 || this.adoptersName.length < 1) {return 'Not possible';}

    let healthyAnimals: Animal[] = this.animals.filter((animal: Animal) => animal.isHealthy);
    let randomHealthyAnimal: Animal = healthyAnimals[Math.floor(Math.random() * healthyAnimals.length)];
    this.animals.splice(this.animals.indexOf(randomHealthyAnimal), 1);
    this.adoptersName.splice(Math.floor(Math.random() * this.adoptersName.length), 1);
  }

  earnDonation(amount: number): void {
    this.budget += amount;
  }

  toString(): void {
    console.log(`Budget: ${this.budget}\nThere are ${this.animals.length} animal(s) and ${this.adoptersName.length} adopter(s)\n`);
    console.log(`${this.animals.forEach((animal: Animal) => console.log(animal.toString()))}`)
  }
}