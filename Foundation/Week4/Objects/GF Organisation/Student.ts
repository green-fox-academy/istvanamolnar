'use strict';

import { Person } from './Person';

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization}, who skipped ${this.skippedDays} days from the course already.`);
  }
  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

/* let zoltan = new Student();
console.log(zoltan);  */
