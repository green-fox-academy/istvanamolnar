'use strict';

import { Employee } from './Employee';

export class Waiter extends Employee {
  name: string;
  experience: number;
  tips: number;
  constructor(name: string, experience: number = 0, tips: number = 0) {
    super(name, experience);
    this.tips = tips;
  }

  work(): void {
    this.tips++;
    this.experience++;
  }
}
