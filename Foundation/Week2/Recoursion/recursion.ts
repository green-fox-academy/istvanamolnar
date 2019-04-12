//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
function sumOfNums(n: number): any {
    return n > 0 ? n + sumOfNums(n - 1) : n;
}
/*    if (n <= 0){
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
/*    if (number < 10) {
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
/*    if (power <= 0) {
        return 1;
    }
    return base * powerN(base, power - 1);
}*/
//console.log(powerN(4, 4));  // =256;


//Find the greatest common divisor of two numbers using recursion. 
// My solution: _+*(num1 < num2)*+_
{
function greatestCommonDivisor(num1: number, num2: number, i:number = Math.ceil(num1 / 2)): any {
    if (num2 % num1 === 0) {
        return num1;
    } else if (i === 1) {
        return 1;
    }
    return num1 % i === 0 && num2 % i === 0 ? i : (greatestCommonDivisor(num1, num2, i - 1));
}
//console.log(greatestCommonDivisor(72, 132)); // = 12;
}

//We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. 
//The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. 
//Recursively return the number of 'ears' in the bunny line 1, 2, ... n (without loops or multiplication).
function bunnyEars(num: number): any {
    return num <= 0 ? 0 : num % 2 === 0 ? 3 + bunnyEars(num - 1) : 2 + bunnyEars(num - 1);
}
/*    if (num <= 0) {
        return 0;
    } else if (num % 2 === 0) {
        return 3 + bunnyEars(num - 1);
    } else { (num % 2 === 1)
        return 2 + bunnyEars(num - 1);
    }
} */
//console.log(bunnyEars(20)); // = 50;

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.
function swapXtoY(str: string, i: number = str.length): any {
    return i === 0 ? str : swapXtoY(str.replace('x', 'y'), i - 1);
}
//console.log(swapXtoY('asdrwxdszwsifxxvewruxblfx'));
