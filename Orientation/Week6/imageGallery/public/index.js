'use strict';

let loadImages = () => {
  fetch(`http://localhost:3000/getimages`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(image => {
        addImages(image);
      });
      document.querySelector('#thumbnails').firstChild.className += ' currentImage';
      return data;
    })
    .then(data => {
      viewImage(data[0].id);

    })
    .catch(error => console.log(error));
}

window.onload = () => {
  loadImages();
}

let addImages = (newOne) => {
  let gallery = document.getElementById("thumbnails");
  let newPicture = document.createElement("IMG");
  newPicture.src = newOne.url;
  newPicture.className += "smallImage";
  newPicture.setAttribute("data-id", newOne.id);
  gallery.appendChild(newPicture);
}

let viewImage = (id) => {
  let newImage = document.createElement("IMG");
  let newTitle = document.createElement("H3");
  let newDescription = document.createElement("P");
  let bg = document.createElement("DIV");
  bg.className += "textbg";
  fetch(`http://localhost:3000/showimage/${id}`)
  .then((res) => res.json())
  .then((data) => {
    let source = data[0];
    newDescription.innerHTML = source.description;
    newTitle.innerHTML = source.title;
    newImage.src = source.url;
    newImage.id = "bigImage";
    let main = document.getElementById("bigImageContainer");
    main.innerHTML = "";
    main.appendChild(newImage);
    main.appendChild(newTitle);
    main.appendChild(newDescription);
    main.appendChild(bg);
  })
  .catch(error => console.log(error));
}

document.querySelector('.right').addEventListener('click', (event) => {
  let currentImage = document.getElementsByClassName("currentImage")[0];
  let thumbs = event.target.parentElement.nextElementSibling.childNodes;
  let nextPhoto; 
  if (currentImage.nextSibling !== null) {
    currentImage.classList.toggle("currentImage");
    currentImage.nextSibling.classList.toggle("currentImage");
    nextPhoto = currentImage.nextSibling.dataset.id;
  } else {
    document.getElementById("thumbnails").firstChild.className += " currentImage";
    document.getElementById("thumbnails").lastChild.className = "smallImage";
    nextPhoto = thumbs[0].dataset.id;
  }
  
  fetch(`http://localhost:3000/showimage/${nextPhoto}`)
  .then((res) => res.json())
  .then((data) => {
    viewImage(data[0].id);
  })
  .catch(error => console.log(error));
})

document.querySelector('.left').addEventListener('click', (event) => {
  let currentImage = document.getElementsByClassName("currentImage")[0];
  let thumbs = event.target.parentElement.nextElementSibling.childNodes;
  let nextPhoto; 
  if (currentImage.previousSibling !== null) {
    currentImage.classList.toggle("currentImage");
    currentImage.previousSibling.classList.toggle("currentImage");
    nextPhoto = currentImage.previousSibling.dataset.id;
  } else {
    document.getElementById("thumbnails").firstChild.classList.toggle("currentImage");
    document.getElementById("thumbnails").lastChild.classList.toggle("currentImage");
    nextPhoto = currentImage.parentElement.lastChild.dataset.id;
  }
  
  fetch(`http://localhost:3000/showimage/${nextPhoto}`)
  .then((res) => res.json())
  .then((data) => {
    viewImage(data[0].id);
  })
  .catch(error => console.log(error));
})

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

document.querySelector('#thumbnails').addEventListener('click', (event) => {
  if (event.target.className.includes('smallImage') && !event.target.className.includes('currentImage')) {
    viewImage(event.target.dataset.id);
    document.getElementsByClassName("currentImage")[0].classList.toggle("currentImage");
    event.target.classList.toggle("currentImage");
  }
})

/* document.querySelector('#uploadForm').addEventListener('submit', (event) => {
  event.preventDefault();
  let input = document.querySelector('input[type="file"]');
  console.log(input.files);

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, multipart/form-data',
      'Content-type':'application/json, text/plain, multipart/form-data'
    },
    body: JSON.stringify({
      file: `${input.files[0]}`,
      title: `${document.querySelector('input[name="title"]').value}`,
      description: `${document.querySelector('input[name="description"]').value}`
    })
  };
  
  fetch('http://localhost:3000/upload', options);
}); */
