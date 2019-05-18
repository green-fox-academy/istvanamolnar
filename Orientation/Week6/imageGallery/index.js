'use strict';

let Images = [
  {title: 'Princess Cruise Ship', description: 'Huge passenger cruise ship sailing on the ocean in the golden hour.', url: 'images/Princess Cruise Ship.jpg'},
  {title: 'Desert Sunset', description: 'A windy sunset in the desert from a different perspective', url: 'images/Desert Sunset.jpg'},
  {title: 'Dome Interior', description: 'A dome of an iconic renaissance building', url: 'images/Dome.jpg'},
  {title: 'Canadian Forest', description: 'Breathtaking moment in the North American deep forest with mountains above snow level.', url: 'images/Canadian Forest.jpg'},
  {title: 'Long Exposure', description: 'A futuristic photo in a dark room with long expo and motion combo.', url: 'images/Long Exposure.jpg'},
  {title: 'Beach Holiday', description: 'Beautiful day at the beach in Hawaii, photo of the most popular vintage van.', url: 'images/Beach Holiday.jpg'},
  {title: 'Misty Morning', description: 'Spooky black and white photo before sunrising, makes you never want to go to this place.', url: 'images/Misty Morning.jpg'},
];

let loadImages = () => {
  for (let i = 0; i < Images.length; i++) {
    let gallery = document.getElementById("thumbnails");
    let newLink = document.createElement("A");
    newLink.href = "http://google.com";
    let newPicture = document.createElement("IMG");
    newPicture.src = Images[i].url;
    newPicture.className += "smallImage";
    newLink.appendChild(newPicture);
    gallery.appendChild(newLink);
    if (i === 0) {newPicture.className += " currentImage";}
  }
}
loadImages();

let addImages = () => {
  let gallery = document.getElementById("thumbnails");
  let newLink = document.createElement("A");
  newLink.href = "http://google.com";
  let newPicture = document.createElement("IMG");
  newPicture.src = Images[Images.length - 1].url;
  newPicture.className += "smallImage";
  newLink.appendChild(newPicture);
  gallery.appendChild(newLink);
}

let viewImage = () => {
  let newImage = document.createElement("IMG");
  let newTitle = document.createElement("H3");
  let newDescription = document.createElement("P");
  let bg = document.createElement("DIV");
  bg.className += "textbg";
  newDescription.innerHTML = Images[2].description;
  newTitle.innerHTML = Images[2].title;
  newImage.src = Images[2].url;
  newImage.id = "bigImage";
  let main = document.getElementById("bigImageContainer");
  main.appendChild(newImage);
  main.appendChild(newTitle);
  main.appendChild(newDescription);
  main.appendChild(bg);
}
viewImage();