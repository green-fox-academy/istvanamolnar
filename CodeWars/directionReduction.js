'use strict';

function dirReduc(arr){
  let simple = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    arr[i] === 'NORTH' && simple[simple.length - 1] !== 'SOUTH' || 
    arr[i] === 'SOUTH' && simple[simple.length - 1] !== 'NORTH' ||
    arr[i] === 'WEST' && simple[simple.length - 1] !== 'EAST' ||
    arr[i] === 'EAST' && simple[simple.length - 1] !== 'WEST' ?
    simple.push(arr[i]) : simple.splice(simple.length - 1, 1);
  }
  return simple;
}

// TASK:
// Once upon a time, on a way through the old wild west…
// … a man was given directions to go from one point to another. 
//The directions were "NORTH", "SOUTH", "WEST", "EAST". 
//Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
//Going to one direction and coming back the opposite direction is a needless effort. 
//Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, 
//
// Sample tests:
// directReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) // => ["WEST"]
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) // => ["NORTH", "WEST", "SOUTH", "EAST"]
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) //  => []

