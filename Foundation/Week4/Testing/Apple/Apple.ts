'use strict';

export class Apple {

  getApple(): string {
    return 'apple';
  }

  sum(arrayOfNumbers: number[]): number {
    return arrayOfNumbers.reduce((a: number, b: number) => a + b);
  }
}