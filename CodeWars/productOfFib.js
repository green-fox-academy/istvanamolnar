'use strict';

function productFib(prod) {  // 200 IQ
  let [a, b] = [0, 1];
  while (a * b < prod) {
    [a, b] = [b, a + b];
  }
  return [a, b, a * b === prod];
}

/* function productFib(prod) {

  function createFibSequence(n) {   // creates a fib sequence up to sqrt(n)
    let list = [0, 1];
    for (let i = 1; list[i] <= Math.sqrt(n); i++) {
      list.push(list[i] + list[i - 1]);
    }
    return list;
  }

  let arrF = createFibSequence(prod);

  if (arrF[arrF.length - 1] * arrF[arrF.length - 2] === prod) {
    return [arrF[arrF.length - 2], arrF[arrF.length - 1], true];
  } else if (arrF[arrF.length - 1] * arrF[arrF.length - 2] > prod) {
    return [arrF[arrF.length - 2], arrF[arrF.length - 1], false];
  } else {
    return [arrF[arrF.length - 1], arrF[arrF.length - 1] + arrF[arrF.length - 2], false];
  }
} */

// TASK: 
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true]
// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prod
// you will return: [F(m), F(m+1), false], => F(m) being the smallest one such as F(m) * F(m+1) > prod.

// Sample tests:
// productFib(4895); // => [55, 89, true]
// productFib(5895); // => [89, 144, false]
// productFib(74049690); // => [6765, 10946, true]
// productFib(84049690); // => [10946, 17711, false]
