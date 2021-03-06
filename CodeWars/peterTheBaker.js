'use strict';

function cakes(recipe, available) {
  return Object.keys(recipe).map(key =>
    available[key] === undefined ? 0 : Math.floor(available[key] / recipe[key])
    ).reduce((a, b) => b < a ? b : a);
}

/*  let Possible = {};
  Object.keys(recipe).filter(key => {
    let rValue = recipe[key];
    let aValue = available[key];
      if (aValue === undefined) { Possible = 0; 
      } else {
        Possible[key] = Math.floor(aValue / rValue);
      }
    });
    return Possible ? Object.values(Possible).reduce((a, b) => b < a ? b : a) : 0;
}  */

// Task:
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
// and returns the maximum number of cakes Pete can bake (integer). 

// Sample tests:
// describe('description example', function() {
//   var recipe, available;

//   it('pass example tests', function() {
//     recipe = {flour: 500, sugar: 200, eggs: 1};
//     available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//     Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');
    
//     recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//     available = {sugar: 500, flour: 2000, milk: 2000};
//     Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
//   });
// });