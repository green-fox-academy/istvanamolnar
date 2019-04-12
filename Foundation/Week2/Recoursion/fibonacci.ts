//Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
function fibonaccify(n: number): any {
  return n <= 1 ? 0 : n === 2 ? 1 : fibonaccify(n-1) + fibonaccify(n - 2);
}
/*  if (n <= 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonaccify(n - 1) + fibonaccify(n - 2);
  }
}*/

console.log(fibonaccify(8));
