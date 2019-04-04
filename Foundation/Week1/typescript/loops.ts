'use strict';


// Create a program that writes this line 100 times:
for (let i = 0; i < 100; i++) { 
    console.log("I won't cheat on the exam!");
}

// Create a program that prints all the even numbers between 0 and 500:
for (let i = 0; i <= 500; i++) {
    console.log(i);
}

// Create a program that
// prints the multiplication table with number
// Example:
// The number 15 should print:
let number: number = 15;
for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + number + " = " + (i * number));
}

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
let input: number = 5;
let sum: number = 0;
let average: number = input / 2;
for (let i = 1; i <= input; i++) {
    sum += i;
}
console.log(`Sum: ${sum}, Average: ${average}`);


// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") : i % 3 === 0 ? console.log("Fizz") : i % 5 === 0 ? console.log("Buzz") : console.log(i);
}

// Write a program that draws a triangle
let lineCount: number = 4;
let star: string = "*";
for (let i = 1; i <= lineCount; i++) {
    console.log(star);
    star += "*";
}

// Write a program that draws a pyramid
let lineCounter: number = 4;
let spaces: string = " ";
let stars: string = "*";
let counter2: number = 1;
for (let i = lineCounter; i > 0; i--) {
    console.log(spaces.repeat(i) + stars.repeat(counter2));
    counter2 += 2;
}

//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
