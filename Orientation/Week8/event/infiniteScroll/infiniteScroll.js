'use strict';

let infinity = document.getElementById('infinity');
for (let i = 0; i < 6; i++) {
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
