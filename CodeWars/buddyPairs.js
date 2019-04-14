'use strict'

function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    let sum1 = listDivisors(i);
    sum1 = sum1.length > 0 ? sum1.reduce((a, b) => a + b) : 0;
    let sum2 = listDivisors(sum1);
    sum2 = sum2.length > 0 ? sum2.reduce((a, b) => a + b) : 0;
    let result = [];
    i === sum2 ? result.push(sum2, sum1) : false;
    if (result.length > 0 && sum2 < sum1) { return result; }
  }
  return "Nothing";
}

function listDivisors(n) {
  let list = [];
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0 && n != i) {
      list.push(i);
      if (i * i != n)
        list.push(n / i);
    }
  }
  return list;
}

// TASK*:
// Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) 
// of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); 
// m can be greater than limit and has to be greater than n.

// For example 48 & 75 is such a pair:
// Divisors of 48 are: 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 75
// Divisors of 75 are: 3, 5, 15, 25 --> sum: 48
// Proper disivors and 1 also excluded

// Sample tests:
// buddy(23, 4669); // [48, 75];
// buddy(4952, 6539); // [5775, 6128];
// buddy(381, 4318); // [1050, 1925];
// buddy(2382, 3679); // "Nothing";