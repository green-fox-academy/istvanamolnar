'use strict';

const matrix2: number[][] = [
  [1, 3, 6, 2],
  [7, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 3]
]

function multiplyItems(matrix: number[][]): void {
  console.log(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        matrix[i].map((x: number) => x % 2 === 0 ? x * 2 : x);
      } else {
        matrix[i].map((x: number) => x % 2 === 1 ? x * 2 : x);
      }
    }
  }
  //console.log(matrix);
}


console.log(multiplyItems(matrix2));
/* 
[
  [1,  3,  12, 4],
  [14, 10, 6,  2],
  [3,  3,  1,  5],
  [18, 0,  10, 6]
] */