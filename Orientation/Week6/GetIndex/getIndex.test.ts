'use strict';

const test = require('tape').test;
import {getIndex} from './getIndex';


test('Correct solution', (t: any) => {
  const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
  t.equal(getIndex(testArray, 'alma'), 0);
  t.end();
}),

test('Correct solution', (t: any) => {
  const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
  t.equal(getIndex(testArray, 'afonya'), -1);
  t.end();
})