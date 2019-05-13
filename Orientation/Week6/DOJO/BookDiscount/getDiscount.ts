'use strict';

export function getDiscount(Books: object): void {
  let numOfBooks: number = Object.values(Books).reduce((a: number, b: number) => a + b);
  let price: number = 0;
  while (numOfBooks > 0) {
    let counter = 0;
    Object.values(Books).map((x: number) => x > 0 ? counter++ && x-- : 0)

    switch(counter) {
      case 5:
        price += 30;
        break;
      case 4:
        price += 25.6;
        break;
      case 3:
        price += 21.6;
        break;
      case 2:
        price += 15.2;
        break;
      case 1:
        price += 8;
        break;
      default:
        console.log('Basket is empty');
    }

    numOfBooks -= counter;
  }
  console.log(price);
}

let HP: Object = {
  first: 4,
  second: 2,
  third: 3,
  fourth: 1
}
getDiscount(HP);