"use strict";

let myFirstObject: any = {
    97:	"a",
    98:	"b",
    99:	"c",
    65:	"A",
    66:	"B",
    67:	"C"
};
//Print all the keys
console.log(Object.keys(myFirstObject));
//Print all the values
console.log(Object.values(myFirstObject));
//Add value D with the key 68
myFirstObject["68"] = "D";
//Print how many key-value pairs are in the map
console.log(Object.keys(myFirstObject).length);
//Print the value that is associated with key 99
console.log(myFirstObject["99"]);
//Remove the key-value pair where with key 97
delete myFirstObject["97"];
//Print whether there is an associated value with key 100 or not
console.log(myFirstObject.hasOwnProperty("100"));
//Remove all the key-value pairs
myFirstObject = {};


let mySecondObject: any = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
}

//Print all the key-value pairs in the following format: A Letter to Jo (ISBN: 978-1-60309-452-8)
function printStuff(object: any): any {
  Object.keys(object).forEach(key => {
      let value = object[key];
      console.log(`${value} (ISBN: ${key})`);
    });
}
printStuff(mySecondObject);

//Remove the key-value pair with key 978-1-60309-444-3
delete mySecondObject["978-1-60309-444-3"];

//Remove the key-value pair with value The Lab
function deleteItem(string: string, object: any) {
    Object.keys(object).forEach(key => {
        object[key] === string ? delete object[key] : key;
      });
}
deleteItem('The Lab', mySecondObject);

//Add the following key-value pairs to the map: "978-1-60309-450-4: They Called Us Enemy", "978-1-60309-453-5: Why Did We Trust Him?"
mySecondObject["978-1-60309-450-4"] = "They Called Us Enemy";
mySecondObject["978-1-60309-453-5"] = "Why Did We Trust Him?";

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(mySecondObject.hasOwnProperty("478-0-61159-424-8"));

//Print the value associated with key 978-1-60309-453-5
console.log(mySecondObject["978-1-60309-453-5"]);