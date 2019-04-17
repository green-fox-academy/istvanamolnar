'use strict';

class PostIt {
  backgroundColor: string;
  textOnIt: string;
  textColor: string;

  constructor (backgroundColor: string, textOnIt: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.textOnIt = textOnIt;
    this.textColor = textColor;
  }
}

// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"
const firstPostIt: object = new PostIt('orange', 'Idea 1', 'blue');
const secondPostIt: object = new PostIt('pink', 'Awesome', 'black');
const thirdPostIt: object = new PostIt('yellow', 'Superb!', 'green');