'use strict'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
function unique(arr: number[]) {
    return arr.reduce((accumulator, currentValue) => {
        if (accumulator.indexOf(currentValue) === -1) {
          accumulator.push(currentValue);
        }
        return accumulator;
      }, [])
}
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))


//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
function bubble(arr: number[]) {
    return arr.sort((a, b) => a - b);
}
function advancedBubble(arr: number[], boolean: boolean) {
    return boolean ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
}
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], false));
//  should print [34, 24, 12, 9, 5]


//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array
function subint(num: number, array: number[]): any{
    let solution: number[] = [];
    array.forEach(x => x.toString().match(num.toString()) ? solution.push(x) : false);
    /*for (let i in array) {
        array[i].toString().match(num.toString()) ? solution.push(array[i]) : false;
    } */
    return solution;
}
// Example
//console.log(subint(2, [1, 26, 3332, 555523333, 5000, 11, 34, 52, 61]));
//console.log(subint(9, [1, 11, 34, 52, 61]));
