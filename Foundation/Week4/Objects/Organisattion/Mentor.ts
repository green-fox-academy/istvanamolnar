'use strict';

import { Person } from './Person';

export class Mentor extends Person {
  level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'Intermediate') {
    super(name, age, gender);
    this.level = level;
  }
  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.')
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`
  }
}

/* let sanyi = new Mentor('sanyi', undefined, undefined, 'Advanced');
console.log(sanyi); */
