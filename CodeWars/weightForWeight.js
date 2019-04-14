'use strict';

function orderWeight(strng) {
  if (!strng) { return strng; }
  let array = strng.split(' ');
  let sumOfDigits = []
  for (let i in array) { //creating a second array which contains the sumOfDigits, same index as array items
    sumOfDigits.push(array[i].split('').reduce((a, b) => parseInt(a) + parseInt(b)));
  }

  let Weight = {}; //creating key:value pairs
  for (let i in array) { //sometimes there are more than of the same key, therefore I've created arrays as values
    Weight.hasOwnProperty(sumOfDigits[i]) ? Weight[sumOfDigits[i]].push(parseInt(array[i]))
      : Weight[parseInt(sumOfDigits[i])] = [parseInt(array[i])];
  }
  
  /*if (Weight.hasOwnProperty(sumOfDigits[i])) {
    Weight[sumOfDigits[i]].push(parseInt(array[i]));
  } else {
    Weight[parseInt(sumOfDigits[i])] = [parseInt(array[i])];
  }*/
  
  for (let i = 0; i < Object.keys(Weight).length; i++) { //the value arrays need to be sorted in order to have correct solution
    Object.values(Weight)[i].sort();
  }
  return [Object.values(Weight)].join(' ').replace(/,/g, ' '); //this is how I can turn 2x array to string
}


// TASK: 
// A string of numbers to be sorted by the sum of digits and returned as a string.
//
// Sample tests: 
// orderWeight("103 123 4444 99 2000"); // "2000 103 123 4444 99"
// orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"); // "11 11 2000 10003 22 123 1234000 44444444 9999"
