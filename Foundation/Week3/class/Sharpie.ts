'use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), 
// width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor (color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use() {
    this.inkAmount -= 10;
  }
}

const BrandNew: Sharpie = new Sharpie('black', 5);

BrandNew.use();
BrandNew.use();
console.log(BrandNew);

BrandNew.color = 'white';
console.log(BrandNew);


// Sharpie Set
//   Reuse your Sharpie class
//   Create SharpieSet class
//   it contains a list of Sharpie
//   countUsable() -> sharpie is usable if it has ink in it
//   removeTrash() -> removes all unusable sharpies

class SharpieSet {
  list: Sharpie [] = [];

  countUsable(): number {
    let counter: number = 0;
    this.list.forEach(x => x.inkAmount >= 10 ? counter++ : false);
    return counter;
    //if (x.inkAmount > 0) { this.list.push(x) };
  }

  removeTrash(): void {
    this.list.filter(x => x.inkAmount >= 0); // { this.list.splice(this.list.indexOf(x), 1) };
  }
}