'use strict'

function listDivisors(n) {
  let list = [];
  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) { // if 'i' starts at '2' => '1' and 'n' are excluded from the array
    if (n % i == 0) {
      list.push(i);
      if (i * i != n)
      list.push(n / i);
    }
  }
  return list.sort((a, b) => a - b);
}

// This function creates an array of the divisors of 'n'. 
// If list.length === 2 => list is prime number!
//console.log(listDivisors(89));