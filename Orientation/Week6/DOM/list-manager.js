'use strict';

let move = () => {
  let selectedp = document.getElementsByClassName("selectp")[0];
  let node = document.createElement("P");
  let havebox = document.getElementsByClassName("have")
  node.appendChild(document.createTextNode(selectedp.innerHTML));
  if (havebox[0].innerHTML.indexOf(selectedp.innerHTML) === -1) {
    havebox[0].appendChild(node);
  } else {
    alert(`${node.innerText} is added already.`)
  }
}

let down = () => {
  let listItems = document.getElementsByClassName("need")[0].children;
  let index;
  for (let item in listItems) {
    if (listItems[item].className === "selectp") {
      index = item;
      listItems[parseInt(item)].className = "";
    }
  }
  if (index < listItems.length - 1) {
    listItems[parseInt(index) + 1].className = "selectp";
  } else {
    listItems[0].className = "selectp";
  }
}

let up = () => {
  let listItems = document.getElementsByClassName("need")[0].children;
  let index;
  for (let item in listItems) {
    if (listItems[item].className === "selectp") {
      index = item;
      listItems[parseInt(item)].className = "";
    }
  }
  if (index > 0) {
    listItems[parseInt(index) - 1].className = "selectp";
  } else {
    listItems[listItems.length - 1].className = "selectp";
  }
}

let del = () => {
  let selectedp = document.getElementsByClassName("selectp")[0].innerText;
  let haveBox = document.getElementsByClassName("box have")[0].children;
  for (let item in haveBox) {
    if (haveBox[item].innerText === selectedp) {
      return document.getElementsByClassName("box have")[0].removeChild(document.getElementsByClassName("box have")[0].children[item]);
    }
  }
  alert(`${selectedp} is not on your list.`);
}