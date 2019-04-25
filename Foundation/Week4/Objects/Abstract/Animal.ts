'use strict';

export abstract class Animal {
  name: string;
  age: number;
  abstract isDomestic: boolean;
  abstract teeth: string;

  constructor(name: string, age: number = Math.floor(Math.random() * 10)) {
    this.name = name;
    this.age = age;
  }
  
  abstract breed(): string;

  getName(): string {
    return this.name;
  }
}
