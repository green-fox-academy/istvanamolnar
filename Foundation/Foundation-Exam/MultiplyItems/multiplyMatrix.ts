'use strict';

export function multiplyItems(matrix: number[][]): number[][] {
  let solutionMatrix: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    solutionMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      const currentItem: number = matrix[i][j];  // for better readability;
      solutionMatrix[i].push(
        (i % 2)
        ? currentItem % 2 ? currentItem * 2 : currentItem
        : currentItem % 2 ? currentItem : currentItem * 2);
    }
  }
  return solutionMatrix;
}
