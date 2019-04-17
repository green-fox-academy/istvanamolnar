// Create Student and Teacher classes
// Student: learn(), question(teacher) -> calls the teachers answer method
// Teacher: teach(student) -> calls the students learn method, answer()

'use strict';

class Student {
  learn(): any {
    return this.learn();
  }
  question(): any {
    Teacher.answer();
  }
}

class Teacher {
  teach(): any {
    Student.learn();
  }
  answer(): any {
    return this.answer();
  }
}