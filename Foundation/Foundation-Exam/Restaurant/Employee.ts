'use strict';

export abstract class Employee {
  name: string;
  experience: number;

  constructor(name: string, experice: number = 0) {
    this.name = name;
    this.experience = experice;
  }
  abstract work(): void;
}
