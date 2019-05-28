'use stract';

let infoBar = document.querySelector('.infobar').innerText;
let candyCounter = 1000;
let lollyopCounter = 10;

document.querySelector('.create-candies').addEventListener('click', () => {
  candyCounter++;
  document.querySelector('.candies').innerText = candyCounter;
  document.querySelector('.infobar').innerText = 'Candy Created!';
});

document.querySelector('.buy-lollypops').addEventListener('click', () => {
  if (candyCounter >= 100) {
    candyCounter -= 100;
    document.querySelector('.lollypops').innerText += "🍭";
    lollyopCounter++;
    document.querySelector('.candies').innerText = candyCounter;
    document.querySelector('.infobar').innerText = 'Lollypop purchased!';
  } else {
    document.querySelector('.infobar').innerText = 'Not enough Candy!';
  }
});

const lollypopgenerator = setInterval(function(){ 
  if (Math.floor(lollyopCounter / 10)) {
    document.querySelector('.infobar').innerText = `You have ${lollyopCounter} lollypops! You will receive ${Math.floor(lollyopCounter / 10)} candy per second from now on`
    candyCounter += Math.floor(lollyopCounter / 10);
    document.querySelector('.candies').innerText = candyCounter;
  }
}, 1000);

document.querySelector('.candy-machine').addEventListener('click', () => {
  clearInterval(lollypopgenerator);
  let time = 5;
  setInterval(() => {
    if (time) {
      document.querySelector('.infobar').innerText = `Candyboost on! You will receive ${Math.floor(lollyopCounter)} candy per second for ${time} sec.`
      time--;
    }
  }, 1000);
  setTimeout(() => {
    clearInterval(boosted);
    setInterval(function(){ 
      if (Math.floor(lollyopCounter / 10)) {
        document.querySelector('.infobar').innerText = `You have ${lollyopCounter} lollypops! You will receive ${Math.floor(lollyopCounter / 10)} candy per second from now on`
        candyCounter += Math.floor(lollyopCounter / 10);
        document.querySelector('.candies').innerText = candyCounter;
      }
    }, 1000);
  }, 5000);
  let boosted = setInterval(function(){ 
    if (Math.floor(lollyopCounter / 10)) {
      candyCounter += Math.floor(lollyopCounter / 10);
      document.querySelector('.candies').innerText = candyCounter;
    }
  }, 100);
});