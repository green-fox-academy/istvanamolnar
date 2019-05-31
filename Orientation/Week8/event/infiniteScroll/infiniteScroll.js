'use strict';

// create 6 color block
let infinity = document.getElementById('infinity');
for (let i = 0; i < 6; i++) {
  let bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  infinity.appendChild(document.createElement('DIV')).style.backgroundColor = bgColor;
}

// insert 5 blocks to the bottom
infinity.addEventListener('scroll', function() {
  console.log('scrollTop: ' + infinity.scrollTop);
  if (infinity.scrollTop + infinity.clientHeight >= infinity.scrollHeight) {
    for (let i = 0; i < 5; i++) {
      let bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      infinity.appendChild(document.createElement('DIV')).style.backgroundColor = bgColor;
    }
  } else if (infinity.scrollTop === 0) {
    let firstOne = infinity.firstChild;
    for (let i = 0; i < 3; i++) {
      let bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      infinity.insertBefore(document.createElement('DIV'), infinity.firstChild).style.backgroundColor = bgColor;
    }
    firstOne.scrollIntoView();
  }
})