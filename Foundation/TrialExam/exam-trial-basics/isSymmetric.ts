'use strict';

function isSymmetric(matrix: number[][]): boolean {
  let counter: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = matrix.length - 1; j >= 0; j--) {
      matrix[i][j] != matrix[j][i] ? counter++ : false;
    }
  }
  return counter === 0;
}
