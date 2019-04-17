'use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  integer: number;
  initial: number;

  constructor(integer: number = 0) {
    this.integer = integer;
    this.initial = integer;
  }

  add(num: number = 1): void {
    this.integer += num;
  }

  get(): any {
    return this.integer.toString();
  }

  reset(): void {
    this.integer = this.initial;
  }
}

const Integer: Counter = new Counter(5000)
const Integer2: Counter = new Counter();

Integer.add();
Integer.add(500);
Integer2.add(40);
Integer2.reset();

console.log(Integer, Integer2);