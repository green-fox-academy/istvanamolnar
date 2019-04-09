"use strict";

//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

//Create an application which solves the following problems.
//How much did we spend?
function sumOfExpenses(array: number[]) {
    return array.reduce((a, b) => a + b);
}

//Which was our greatest expense?
function maxExpense(array: number[]) {
    return array.reduce((a, b) => b > a ? b : a);
}

//Which was our cheapest spending?
function minExpense(array: number[]) {
    return array.reduce((a, b) => b < a ? b : a);
}

//What was the average amount of our spendings?
function averageOfExpenses(array: number[]) {
    return array.reduce((a, b) => a + b) / array.length;
}
