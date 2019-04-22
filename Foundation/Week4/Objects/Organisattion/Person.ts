'use strict';

export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'Female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}.`
  }

  getGoal(): string {
    return 'My goal is: Live for the moment!'
  }
}

//const jozsika: Person = new Person('jozsi', 89, 'shemale');