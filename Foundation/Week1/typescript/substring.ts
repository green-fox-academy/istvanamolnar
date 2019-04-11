'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string) : number {
    return str.indexOf(keyword) ? str.indexOf(keyword) : -1;
}

function substr2(str: string, keyword: string) {
    let i = 0; 
    while (i < (str.length - keyword.length)) {
            if (keyword[0] === str[i]) {
                //str.slice();
                let sliced: string = '';
                for (let j = i; j < (i + keyword.length); j++) {
                    sliced += str[j];
                }
                if (sliced === keyword) {
                    return i;
                } else {
                    i++;
                }
            } else {
                i++;
            }
    }
    return -1;
}
//  Example

// should print: `17`
console.log(substr2('this is what I\'m searching in', 'searching'));

// should print: `-1`
console.log(substr2('this is what I\'m searching in', 'not'));