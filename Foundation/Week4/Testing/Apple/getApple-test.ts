'use strict';

//import * as test from 'tape';
const test = require('tape').test;
import {Apple} from './Apple';

test('Apple test', (t: any) => {
  const apple: Apple = new Apple()

  /*let actual: string = apple.getApple();
  let expected: string = 'apple'; 

  t.equal(actual, expected);
  t.end(); */

  t.equal(apple.getApple(), 'apple');
  t.end();
});