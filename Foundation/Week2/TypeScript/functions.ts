'use strict';

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console
let baseNum: number = 123;
function doubling(num: number) {
    return num * 2;
}
//console.log(doubling(baseNum));


// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`
let nameToGreet: string = 'Greenfox';
function greet(str: string) {
    console.log(str ? `Greeting, dear ${str}` : `Ẁhat is your name, friend?`);
}
//greet('');


// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`
let typo: string = 'Chinchill';
function appendAFunc(str: string) {
    return str += 'a';
}
//console.log(appendAFunc(typo));


// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
function sum(num: number) {
    let sum: number = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}


// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorio(num: number) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments) ?????
function printParams(x: any) {
    console.log(x);
}