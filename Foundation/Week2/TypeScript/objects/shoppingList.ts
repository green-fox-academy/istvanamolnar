"use strict";

let Price: any = {
    "Milk":	1.07,
    "Rice":	1.59,
    "Eggs":	3.14,
    "Cheese": 12.60,
    "Chicken":9.40,
    "Apple": 2.31,
    "Tomato": 2.58,
    "Potato": 1.75,
    "Onion": 1.10
}

let Bob: any = {
    "Milk":	3,
    "Rice":	2,
    "Eggs":	2,
    "Cheese": 1,
    "Chicken": 4,
    "Apple": 1,
    "Tomato": 2,
    "Potato": 1,
}

let Alice: any = {
    "Rice": 1,
    "Eggs": 5,
    "Chicken": 2,
    "Apple": 1,
    "Tomato": 10
}

function priceToPay(shop: any, customer: any): any {
    let priceSum: any = 0;
    Object.keys(customer).forEach(key => {
        let value = shop[key];
        priceSum += (customer[key] * value);
        });
    return priceSum;
}
//How much does Bob pay?
//console.log(priceToPay(Price, Bob));

//How much does Alice pay?
//console.log(priceToPay(Price, Alice));

function compareAmount(customer1: any, customer2: any) {
    Object.keys(customer2).filter(key => {
        let value1 = customer1[key];
        let value2 = customer2[key];
        return value1 > value2 ? console.log(`${customer1} buys more ${key}.`) : console.log(`${customer2} buys more ${key}.`);
        ;
        });
}
compareAmount(Bob, Alice);
//Who buys more Rice?
//Who buys more Potato?
//Who buys more different products?
//Who buys more products? (piece)
