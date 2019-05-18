'use strict';

let Images = [
  {title: 'Princess Cruise Ship', description: 'Huge passenger cruise ship sailing on the ocean in the golden hour.', url: 'images/PrincessCruiseShip.jpg'},
  {title: 'Desert Sunset', description: 'A windy sunset in the desert from a different perspective', url: 'images/DesertSunset.jpg'},
  {title: 'Dome Interior', description: 'A dome of an iconic renaissance building', url: 'images/Dome.jpg'},
  {title: 'Canadian Forest', description: 'Breathtaking moment in the North American deep forest.', url: 'images/CanadianForest.jpg'},
  {title: 'Long Exposure', description: 'A futuristic photo in a dark room with long expo and motion combo.', url: 'images/LongExposure.jpg'},
  {title: 'Beach Holiday', description: 'Beautiful day at the beach in Hawaii, photo of the most popular vintage van.', url: 'images/BeachHoliday.jpg'},
  {title: 'Misty Morning', description: 'Spooky black and white photo before sunrising.', url: 'images/MistyMorning.jpg'},
];

let loadImages = () => {
  for (let i = 0; i < Images.length; i++) {
    let gallery = document.getElementById("thumbnails");
    let newPicture = document.createElement("IMG");
    newPicture.src = Images[i].url;
    newPicture.className += "smallImage";
    gallery.appendChild(newPicture);
    if (i === 0) {newPicture.className += " currentImage";}
  }
}
loadImages();

let addImages = () => {
  let gallery = document.getElementById("thumbnails");
  let newPicture = document.createElement("IMG");
  newPicture.src = Images[Images.length - 1].url;
  newPicture.className += "smallImage";
  gallery.appendChild(newPicture);
}

let viewImage = () => {
  let newImage = document.createElement("IMG");
  let newTitle = document.createElement("H3");
  let newDescription = document.createElement("P");
  let bg = document.createElement("DIV");
  bg.className += "textbg";
  let currentImage = document.getElementsByClassName("currentImage")[0];
  let source = Images.filter(x => currentImage.src.includes(x.url))[0];
  newDescription.innerHTML = source.description;
  newTitle.innerHTML = source.title;
  newImage.src = currentImage.src;
  newImage.id = "bigImage";
  let main = document.getElementById("bigImageContainer");
  main.innerHTML = "";
  main.appendChild(newImage);
  main.appendChild(newTitle);
  main.appendChild(newDescription);
  main.appendChild(bg);
}
viewImage();

let goRight = () => {
  let currentImage = document.getElementsByClassName("currentImage")[0];
  let indexCounter = Images.indexOf(Images.filter(x => currentImage.src.includes(x.url))[0]) + 2;
  if (indexCounter <= Images.length) {
    currentImage.className = "smallImage";
    currentImage.nextSibling.className += " currentImage";
  } else {
    document.getElementById("thumbnails").firstChild.className += " currentImage";
    document.getElementById("thumbnails").lastChild.className = "smallImage";
  }
  viewImage();
}

let goLeft = () => {
  let currentImage = document.getElementsByClassName("currentImage")[0];
  let indexCounter = Images.indexOf(Images.filter(x => currentImage.src.includes(x.url))[0]);
  if (indexCounter > 0) {
    currentImage.className = "smallImage";
    currentImage.previousSibling.className += " currentImage";
  } else {
    document.getElementById("thumbnails").lastChild.className += " currentImage";
    document.getElementById("thumbnails").firstChild.className = "smallImage";
  }
  viewImage();
}