'use strict';

const test = require('tape').test;
import {multiplyItems} from './multiplyMatrix';


test('Valid matrix', (t: any) => {
  const matrix: number[][] = [];
  t.equal(typeof multiplyItems(matrix), typeof matrix, 'Input matrix and output matrix should be: number[][]');
  t.end();
}),

test('Correct output test', (t: any) => {
  const testMatrix: number[][] = [[1, 3, 6, 2], [7, 5, 6, 1], [3, 3, 1, 5], [9, 0, 5, 3]];
  const expectedMatrix: number[][] = [[1,  3,  12, 4], [14, 10, 6,  2], [3,  3,  1,  5], [18, 0,  10, 6]]

  t.deepEqual(multiplyItems(testMatrix), expectedMatrix, 'Output should be correct.');
  t.end();
}),

test('Empty matrix', (t: any) => {
  const testMatrix: number[][] = [];
  const expectedMatrix: number[][] = [];

  t.deepEqual(multiplyItems(testMatrix), expectedMatrix, 'Empty matrix should return empty matrix.');
  t.end();
}),

test('Logic test', (t: any) => {
  const testMatrix: number[][] = [[1, 3, 6, 2], [7, 5, 6, 1], [3, 3, 1, 5], [9, 0, 5, 3]];
  const notExpectedMatrix: number[][] = [[1,  2,  12, 4], [7, 10, 6,  2], [3,  3,  1,  5], [18, 2,  10, 6]]

  t.notDeepEqual(multiplyItems(testMatrix), notExpectedMatrix,);
  t.end();
})
