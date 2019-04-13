'use strict';

function sumStrings(a, b) {
  a ? a : a = "0";
  b ? b : a = "0";
  //console.log(a, b);
  //console.log((parseInt(a) + parseInt(b)).toString()); //------> it would be very easy with shorter integers.
  let arrayA = a.split("").reverse().map(x => parseInt(x));
  let arrayB = b.split("").reverse().map(x => parseInt(x));
  let result = [];
  let remainder = 0;
  let length = arrayA.length >= arrayB.length ? arrayA.length : arrayB.length; // need to define the length for the for loop

  for (let i = 0; i < length; i++) {
    !arrayA[i] ? arrayA[i] = 0 : !arrayB[i] ? arrayB[i] = 0 : false; // in case of "a" or "b" is longer than the another, it places 0 as value of "i"
    if (remainder) { // if there is a remainder from the previous step
      if (arrayA[i] + arrayB[i] + 1 < 10) {
        result.push(arrayA[i] + arrayB[i] + 1);
        remainder = 0;
      } else {
        result.push(arrayA[i] + arrayB[i] - 9); // this could be "-10 + 1"
        remainder = 1;
      }
    } else { // if there is no remainder carried from the previous step
      if (arrayA[i] + arrayB[i] < 10) {
        result.push(arrayA[i] + arrayB[i]);
      } else {
        result.push(arrayA[i] + arrayB[i] - 10);
        remainder = 1;
      }
    }
    i === length - 1 && remainder === 1 ? result.push(1) : false; // in case there is a remainder after the last addition, it addsthe remainder to the result
  }
  result = result.reverse().join("");
  return result//[0] === "0" ? result = result.substr(1) : result; //
}

// TASK:
// Given the string representations of two integers, return the string representation of the sum of those integers.
//
// Sample test:
// console.log(sumStrings("5464356476354253546746532", "9878765456765445676543345"));
