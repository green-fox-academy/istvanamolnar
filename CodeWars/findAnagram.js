'use strict';

function anagrams(word, words) {
  let solution = [];
  let sorted = words.map(x => x.split('').sort().join('')); //sort each letters of each word in 'words' to alphabetic order
  word = word.split('').sort().join(''); // sort 'word' to alphabetic order too  => easy to find the match in the array
  for (let i in sorted) {
    sorted[i] === word ? solution.push(words[i]) : false;
  }
  return solution;
}

// TASK: 
// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.
// 
// Sample tests:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])  // => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])  // => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []