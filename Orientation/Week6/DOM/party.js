'use strict';

let div = document.getElementsByTagName("div")[0];
let button = document.getElementsByTagName("button");
function party() {
  div.className += " party";
  div.removeChild(button[0]);
  console.log(div);
  

}