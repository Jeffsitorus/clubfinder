// let imageFigureElement = document.querySelector("image-figure");

// if (!imageFigureElement) {
//   imageFigureElement = document.createElement("image-figure");
//   document.body.appendChild(imageFigureElement);
// }

// setTimeout(() => {
//   imageFigureElement.setAttribute("caption", "Gambar 1");
// }, 1000);


// setTimeout(() => {
//   imageFigureElement.remove();
// }, 3000);

const imageFigureElement = document.createElement("image-figure");

imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
imageFigureElement.setAttribute("alt", "Logo Dicoding");
imageFigureElement.setAttribute("caption", "Huruf g dalam logo dicoding");
document.body.appendChild(imageFigureElement);