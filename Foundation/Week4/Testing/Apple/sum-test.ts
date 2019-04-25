'use strict';

const test = require('tape').test;
import {Apple} from './Apple';

test('Apple test', (t: any) => {
  const apple: Apple = new Apple()
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  let actual: number = apple.sum(arrayOfNumbers);
  let expected: number = 15; 

  t.equal(actual, expected);
  t.end();
});