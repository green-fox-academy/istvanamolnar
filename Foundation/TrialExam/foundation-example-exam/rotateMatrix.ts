'use strict';

function rotateMatrix(matrix: number[][]): number[][] {
  let rotatedMatrix: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    rotatedMatrix.push([]);
    for (let j = matrix.length - 1; j >= 0; j--) {
      rotatedMatrix[i].push(matrix[j][i]);
    }
  }
  return rotatedMatrix;
}