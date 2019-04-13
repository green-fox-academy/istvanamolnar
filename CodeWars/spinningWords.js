'use strict';

function spinWords(string) {
  return string.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}

// TASK:
// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces. 
//
// Sample tests:
// 
// spinWords("Welcome"), "emocleW";
// spinWords("Hey fellow warriors"), //"Hey wollef sroirraw";
// spinWords("This is a test"), //"This is a test";
// spinWords("This is another test"), //"This is rehtona test";
// spinWords("You are almost to the last test"), //"You are tsomla to the last test";
// spinWords("Just kidding there is still one more"), //"Just gniddik ereht is llits one more";
// spinWords("Seriously this is the last one"), //"ylsuoireS this is the last one";

