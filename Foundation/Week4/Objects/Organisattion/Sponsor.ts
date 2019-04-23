'use strict';

import { Person } from './Person'

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string = 'Google', hiredStudents: number = 0) {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`
  }

  hire(): void {
    this.hiredStudents++;
  }

  getGoal(): string {
    return 'Hire brilliant junior software developers.'
  }
}