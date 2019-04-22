'use strict';

import { Person } from './Person';

class Mentor extends Person {
  level: string;
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'Intermediate') {
    super(name, age, gender);
    this.level = level;
  }
  getGoal(): string {
    return 'My goal is: Educate brilliant junior software developers.'
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`
  }
}