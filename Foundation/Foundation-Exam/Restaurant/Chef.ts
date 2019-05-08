'use strict';

import { Employee } from './Employee';

export class Chef extends Employee {
  name: string;
  experience: number;
  meals: any = {};

  constructor(name: string, experience: number = 0, meals: Object = {}) {
    super(name, experience);
    this.name = name;
    this.experience = experience;
    this.meals = meals;
  }
  work() {
    this.experience++;
  }

  cook(nameOfTheFood: string): void {
    this.meals.hasOwnProperty(nameOfTheFood) ? this.meals[nameOfTheFood]++ : this.meals[nameOfTheFood] = 1;
  }
}
