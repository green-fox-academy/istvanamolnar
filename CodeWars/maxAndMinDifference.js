'use strict';

function maxAndMin(arr1,arr2){
  let min = 10E6;
  let max = 0;
  for (let i in arr1) {
    for (let j in arr2) {
      let cache = arr1[i] - arr2[j] < 0 ? (arr1[i] - arr2[j]) * (-1) : arr1[i] - arr2[j];
      min = cache < min ? cache : min; 
      max = cache > max ? cache : max;
    }
  }
  return [max, min];
}

// TASK:
// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, 
// and another element in arr2), their difference is as big as possible(absolute value); 
// Again, you should to find a pair of numbers, their difference is as small as possible. 
// Return the maximum and minimum difference values by an array: [ max difference, min difference ]
//
// Sample tests:
// maxAndMin([3,10,5],[20,7,15,8]) // => [17,2]
// maxAndMin([3],[20]) // => [17,17]
// maxAndMin([3,10,5],[3,10,5]) // => [7,0]
// maxAndMin([1,2,3,4,5],[6,7,8,9,10]) // => [9,1]
