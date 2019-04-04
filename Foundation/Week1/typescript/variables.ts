'use strict';

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'
let favoriteNumber: number = 89;
console.log("My favourite number is: " + favoriteNumber);

// Swap the values of these variables
let first: number = 123;
let second: number = 526;
first = 526;
second = 123;
console.log(first);
console.log(second);

// Print the Body mass index (BMI) based on these values
let massInKg: number = 81.2;
let heightInM: number = 1.78;
console.log("BMI: " + (massInKg / heightInM).toFixed());

// Define several things as a variable, then print their values
// Your name as a string
const myName: string = "Istvan Molnar";
// Your age as a number
let myAge: number = 30;
// Your height in meters as a number
let myHeight: number = 1.77;
// Whether you are married or not as a boolean
let amIMarried: boolean = false;


let a: number = 3;
// make it bigger by 10
a += 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b -= 7;
console.log(b);

let c: number = 44;
// double c's value
c *= 2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d /= 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e * e * e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean) - no
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean) - yes
console.log(g1 < g2*2);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean) - yes
console.log(h % 11 ? false : true);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean) - yes
console.log(i1 > (i2 * i2) && i1 < (i2 * i2 * i2) ? true : false);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean) - no
console.log((j % 3 === 0) && (j % 5 === 0));


// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let k: number;
let l: number;
let m: number;

console.log("Surface Area: " + (k * l * m));
console.log("Volume: " + (k + l + m));



let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let remainingHours: number = 23 - currentHours;
let remainingMinutes: number = 60 - currentMinutes;
let remainingSeconds: number = 60 - currentSeconds;
//console.log(remainingHours + ":" + remainingMinutes + ":" + remainingSeconds);
console.log("Remaining seconds: " + ((remainingHours * 60 + remainingMinutes) * 60 + remainingSeconds));
