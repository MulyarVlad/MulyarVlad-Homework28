const randomIndex = Math.floor(Math.random() * images.length);

const randomImage = images[randomIndex];

const imagePath = "" + randomImage;

const imgElement = document.createElement("img");

imgElement.src = imagePath;

document.body.appendChild(imgElement);