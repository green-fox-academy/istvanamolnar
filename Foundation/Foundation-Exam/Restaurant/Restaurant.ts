'use strict';

import { Employee } from './Employee';

export class Restaurant {
  name: string;
  foundedIn: number;
  listOfEmployees: Employee[];
  constructor(name: string, foundedIn: number, listOfEmployees: Employee[] = []) {
    this.name = name;
    this.foundedIn = foundedIn;
    this.listOfEmployees = listOfEmployees;
  }

  guestsArrived(): void {
    this.listOfEmployees.forEach((employee: Employee) => employee.work());
  }

  hire(person: Employee): void {
    this.listOfEmployees.push(person);
  }
}
