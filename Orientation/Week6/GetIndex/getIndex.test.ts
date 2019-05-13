'use strict';

const test = require('tape').test;
import {getIndex} from './getIndex';


test('Correct solution', (t: any) => {
  const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
  t.deepEqual(getIndex(testArray, 'alma'), [0]);
  t.end();
}),

test('Correct solution', (t: any) => {
  const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper'];
  t.deepEqual(getIndex(testArray, 'afonya'), [-1]);
  t.end();
})

test('Correct solution', (t: any) => {
  const testArray: string[] = ['alma', 'banan', 'citrom', 'dinnye', 'eper', 'alma'];
  t.deepEqual(getIndex(testArray, 'alma'), [0, 5]);
  t.end();
})

