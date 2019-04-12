'use strict';
function validParentheses(parens){
  let counter = 0;
  parens.split("").filter(x => x === "(" ? counter++ : counter--);
  return (parens[0] !== ")" && parens[parens.length - 1] !== "(" && counter === 0);
}

// TASK:
//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
//The function should return true if the string is valid, and false if it's invalid.
//
// Sample tests:
//console.log(validParentheses("()")              // =>  true
//console.log(validParentheses(")(()))")          // =>  false
//console.log(validParentheses("(")               // =>  false
//console.log(validParentheses("(())((()())())")  // =>  true