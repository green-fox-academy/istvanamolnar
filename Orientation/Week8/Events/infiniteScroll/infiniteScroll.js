'use strict';

let infinity = document.getElementById('infinity');
let number = Math.floor(Math.random() * 20);
for (let i = 0; i < number; i++) {
  infinity.appendChild(document.createElement('DIV')).style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

infinity.addEventListener('scroll', function() {
  if (infinity.scrollTop + infinity.clientHeight >= infinity.scrollHeight) {
    for (let i = 0; i < 5; i++) {
      infinity.appendChild(document.createElement('DIV')).style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
  } else if (infinity.scrollTop === 0) {
    let firstOne = infinity.firstChild;
    for (let i = 0; i < 5; i++) {
      infinity.insertBefore(document.createElement('DIV'), infinity.firstChild).style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    firstOne.scrollIntoView();
  }
})
