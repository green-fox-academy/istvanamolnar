'use strict';

import { Student } from './Student';
import { Mentor } from './Mentor';

export class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(Student: Student): void {
    this.students.push(Student);
  }

  addMentor(Mentor: Mentor): void {
    this.mentors.push(Mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

/* const ferrilata = new Cohort('TicTac');
console.log(ferrilata); */