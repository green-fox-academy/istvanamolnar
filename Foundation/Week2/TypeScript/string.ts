'use srict';

let example: string = 'In a dishwasher far far away';
// I would like to replace 'dishwasher' with 'galaxy' in this example
// Expected ouput: In a galaxy far far away
function swapToGalaxy(str: string) {
    return str.split(' ').map(x => x === 'dishwasher' ? x = 'galaxy' : x).join(' ');
}
//console.log(example);

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(str: string) {
    return str.split(' ').map(x => x.split('').reverse().join('')).reverse().join(' ');
}
//console.log(reverse(reversed));

// Accidentally I got the wrong URL for a funny subreddit. It's probably 'odds' and not 'bots'
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
function urlFixer(str: string) {
    str = str.replace('bots', 'odds');
    return str = str.match(/https:\/\//) ? str : 'https:\/\/' + str.slice(str.indexOf('www'), -1);
}
//console.log(urlFixer(url));
