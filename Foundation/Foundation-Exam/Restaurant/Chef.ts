'use strict';

import { Employee } from './Employee';

export class Chef extends Employee {
  name: string;
  experience: number;
  meals: Object;

  constructor(name: string, experience: number = 0, meals: Object = {}) {
    super(name, experience);
    this.meals = meals;
  }
  work() {
    this.experience++;
  }

  cook(nameOfTheFood: string) {
    this.meals.hasOwnProperty(nameOfTheFood) ? this.meals[nameOfTheFood]++ : this.meals[nameOfTheFood] = 1;
  }
}
