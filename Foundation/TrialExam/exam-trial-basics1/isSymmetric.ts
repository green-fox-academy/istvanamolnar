'use strict';

function isSymmetric(matrix: number[][]): boolean {
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = matrix.length - 1; j >= 0; j--) {
      if (matrix[i][j] != matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}