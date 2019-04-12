'use strict';

function moveZeros(arr) {
  let counter = 0;
  let newArray = [];
  arr.forEach(x => x === 0 ? counter++ : newArray.push(x));
  for (let i = 0; i < counter; i++) {
    newArray.push(0);
  }
  return newArray;
}

// TASK:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// Sample test:
//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]