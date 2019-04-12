'use strict';
function zero(number) {
  return !number ? 0 : number[0] === "+" ? number[1] + 0 : number[0] === "-" ? 0 - number[1] : number[0] === "*" ? number[1] * 0 : Math.floor(0 / number[1]);
};
function one(number) {
  return !number ? 1 : number[0] === "+" ? number[1] + 1 : number[0] === "-" ? 1 - number[1] : number[0] === "*" ? number[1] * 1 : Math.floor(1 / number[1]);
};
function two(number) {
  return !number ? 2 : number[0] === "+" ? number[1] + 2 : number[0] === "-" ? 2 - number[1] : number[0] === "*" ? number[1] * 2 : Math.floor(2 / number[1]);
};
function three(number) {
  return !number ? 3 : number[0] === "+" ? number[1] + 3 : number[0] === "-" ? 3 - number[1] : number[0] === "*" ? number[1] * 3 : Math.floor(3 / number[1]);
};
function four(number) {
  return !number ? 4 : number[0] === "+" ? number[1] + 4 : number[0] === "-" ? 4 - number[1] : number[0] === "*" ? number[1] * 4 : Math.floor(4 / number[1]);
};
function five(number) {
  return !number ? 5 : number[0] === "+" ? number[1] + 5 : number[0] === "-" ? 5 - number[1] : number[0] === "*" ? number[1] * 5 : Math.floor(5 / number[1]);
};
function six(number) {
  return !number ? 6 : number[0] === "+" ? number[1] + 6 : number[0] === "-" ? 6 - number[1] : number[0] === "*" ? number[1] * 6 : Math.floor(6 / number[1]);
};
function seven(number) {
  return !number ? 7 : number[0] === "+" ? number[1] + 7 : number[0] === "-" ? 7 - number[1] : number[0] === "*" ? number[1] * 7 : Math.floor(7 / number[1]);
};
function eight(number) {
  return !number ? 8 : number[0] === "+" ? number[1] + 8 : number[0] === "-" ? 8 - number[1] : number[0] === "*" ? number[1] * 8 : Math.floor(8 / number[1]);
};
function nine(number) {
  return !number ? 9 : number[0] === "+" ? number[1] + 9 : number[0] === "-" ? 9 - number[1] : number[0] === "*" ? number[1] * 9 : Math.floor(9 / number[1]);
};

function plus(num) {return ["+", num]};
function minus(num) {return ["-", num]};
function times(num) {return ["*", num]};
function dividedBy(num) {return ["/", num]};

// TASK:
//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3
