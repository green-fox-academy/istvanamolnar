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
//console.log(mostExpensive(products));

//What is the average price?
function avgPrice(object: any) {
    return Object.values(object).reduce((x:any, y:any) => x + y);
}
console.log(avgPrice(products));

//How many products' price is below 300?
function belowPrice(object: any, number: number) {
    return Object.values(object).filter(x => x < number).length;
}
//console.log(belowPrice(products, 300));

//Is there anything we can buy for exactly 125?
function exactPrice(object: any, number: number) {
    return Object.values(object).filter(x => x === number);
}
//console.log(exactPrice(products, 150));

//What is the cheapest product?
function cheapest(object: any) {
    return Object.values(object).reduce((a, b) => b < a ? b : a);
}
//console.log(cheapest(products));

//Which products cost less than 201? (just the name)
function nameOfCheapProducts(object: any, number: number) {
    let cheapOnes: any = {};
    Object.keys(object).map(key => {
        let value = object[key];
        value < number ? cheapOnes[key] = value : false;
    });
    return Object.keys(cheapOnes);
}
console.log(nameOfCheapProducts(products, 151));

//Which products cost more than 150? (name + price)
function expensiveProducts(object: any, number: number) {
    let expensiveOnes: any = {};
    Object.keys(object).filter(key => {
        let value = object[key];
        number < value ? expensiveOnes[key] = value : false;
    });
    return expensiveOnes;
}
//console.log(expensiveProducts(products, 150));