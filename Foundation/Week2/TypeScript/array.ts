// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method
let integers: number[] = [4, 5, 6, 7];
function print(array: number[]) {
    integers.forEach(x => console.log(x));
}

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
let numList: number[] = [1, 2, 3, 8, 5, 6];
function eightToFour(array: number[]) {
    array.map(x => x === 8 ? x = 4 : x);
}

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console
let numList2: number[] = [1, 2, 3, 4, 5];
function incrementTheThird(array: number[]) {
    array[2]++;
    return array;
}
//console.log(incrementTheThird(numList2));


// -  Create an array variable named `animals`
//    with the following content: `['koal', 'pand', 'zebr']`
// -  Add all elements an `'a'` at the end
let animals: string[] = ['koal', 'pand', 'zebr'];
function addA(array: string[]) {
    return array.map(x => x + 'a');
}
//console.log(addA(animals));


// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
function doubleIt(array: string[]) {
    return array.map(x => x + x);
}
//console.log(doubleIt(drinks));


// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
let ai: number[] = [3, 4, 5, 6, 7];
function logSum(array: number[]) {
    console.log(array.reduce((a, b) => a + b));
}