"use strict";
//Create an empty list which will contain names (strings)
let names: string[] = [];
function addName(array: string[], name: string) {
    return array.push(name);
}
//Add William to the list
addName(names, "William");
//Print out whether the list is empty or not
console.log(`The list is empty - ${names.length === 0}`);
//Add John to the list
//Add Amanda to the list
addName(names, "John");
addName(names, "Amanda");

//Print out the number of elements in the list
console.log(names.length);
//Print out the 3rd element
console.log(names[2]);
//Iterate through the list and print out each name
names.forEach(x => console.log(x));


//We are going to represent a shopping list in a list containing strings.
//Create a list with the following items.
//Eggs, milk, fish, apples, bread and chicken
let shoppingList: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];
//Create an application which solves the following problems.
//Do we have milk on the list?
//Do we have bananas on the list?
function findItem(item: string) {
    return shoppingList.forEach(x => x === item ? console.log(`There is ${item} on the list`) : false);
}
console.log(findItem("milk"));
