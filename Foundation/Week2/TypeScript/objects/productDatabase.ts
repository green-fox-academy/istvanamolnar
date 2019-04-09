//We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
//Create a map with the following key-value pairs.
let products: any = {
    "eggs": 200,
    "milk": 200,
    "fish": 400,
    "apples": 150,
    "bread": 50,
    "chicken": 550
}
//Create an application which solves the following problems.
//How much is the fish?
function priceOfItem(object: any, item: string) {
    return object[item];
}
//What is the most expensive product?
function mostExpensive(object: any) {
    return Object.values(object).reduce((a, b) => b > a ? b : a);
}
console.log(mostExpensive(products));

//What is the average price?
function avgPrice(object: any) {
    return Object.values(object).reduce((x, y) => x + y);
}
console.log(avgPrice(products));

//How many products' price is below 300?
//Is there anything we can buy for exactly 125?
//What is the cheapest product?