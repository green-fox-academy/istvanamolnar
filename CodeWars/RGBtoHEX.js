'use strict';

function rgb(r, g, b) {
  let validRGB = [r, g, b].map(x => x > 255 ? x = 255 : x < 0 ? x = 0 : x)  // as per instructions
  let hex = validRGB.map(x => Number(x).toString(16).toUpperCase());
  return hex.map(x => x.length < 2 ? '0' + x : x).join('');
}

/* function rgb(r, g, b){
  
  function convert(color) {
    color = color > 255 ? 255 : color < 0 ? 0 : color; // if color is not in range, turn to valid number as per instructions say
    let hex = Number(color).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex.toString().toUpperCase();
  }
  
  let red = convert(r);
  let green = convert(g);
  let blue = convert(b);
  
  return red.concat(green).concat(blue);
} */


//  TASK: 
//  rgb(255, 255, 255) // returns FFFFFF
//  rgb(255, 255, 300) // returns FFFFFF
//  rgb(0,0,0) // returns 000000
//  rgb(148, 0, 211) // returns 9400D3