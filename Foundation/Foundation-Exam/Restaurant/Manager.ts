'use strict';

import { Employee } from './Employee';

export class Manager extends Employee {
  name: string;
  experience: number;
  moodLevel: number

  constructor(name: string, experice: number = 0, moodLevel: number = 400) {
    super(name, experice);
    this.moodLevel = moodLevel;
  }

  work() {
    this.experience++;
    this.haveAMeeting();
  }

  haveAMeeting() {
    this.moodLevel -= this.experience;
  }
}
