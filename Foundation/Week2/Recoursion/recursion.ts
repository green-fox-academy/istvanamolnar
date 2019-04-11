//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
function sumOfNums(n: number): any {
    return n > 0 ? n + sumOfNums(n - 1) : n;
}
    /*if (n <= 0){
        return 0;
    }
    return n + sumOfNums(n - 1);
}*/
//console.log(sumOfNums(10)); // = 55

//Given a non-negative int n, return the sum of its digits recursively (no loops). 
//Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), 
//while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
function sumOfDigits(number: number): any {
    return (number > 10) ? number % 10 + sumOfDigits((number - (number % 10)) / 10) : number;
}          
    /*if (number < 10) {
        return number;
    }          
    return number % 10 + sumOfDigits((number - (number % 10)) / 10);
}*/
//console.log(sumOfDigits(545634538));  // = 43

//Given base and n that are both 1 or more, compute recursively (no loops) 
//the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
function powerN(base: number, power: number): any {
    return power > 0 ? base * powerN(base, power - 1) : 1;
}
    /*if (power <= 0) {
        return 1;
    }
    return base * powerN(base, power - 1);
}*/
//console.log(powerN(4, 4));  // =256;

//Find the greatest common divisor of two numbers using recursion. ***********(num1 < num2)**********
// My solution:
{
let i: number = 0;
function greatestCommonDivisor(num1: number, num2: number): any {
    if (num2 % num1 === 0) {
        i = num1 + 1;
    } else if (i === 0) {
        i = Math.ceil(num1 / 2);
    } else if (i === 1) {
        return 1;
    }
    i--;
    return num1 % i === 0 && num2 % i === 0 ? i : (greatestCommonDivisor(num1, num2));
}
//console.log(greatestCommonDivisor(66, 132));
}