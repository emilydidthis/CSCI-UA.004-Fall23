// DOM query that accesses all elements of class cloud as a NodeList
let navImages = document.querySelectorAll(".cloud");
console.log(navImages);

let mainImage = document.querySelector(".airplane");


function lgaImage(){ // change src of main image to LGA
  mainImage.src = "images/lga.jpg";
  mainImage.srcset = "images/lga-2x.jpg 2x";
}

function cdgImage(){ // change src of main image to CDG
  mainImage.src = "images/cdg.jpg";
  mainImage.srcset = "images/cdg-2x.jpg 2x";
}

function nrtImage(){ // change src of main image to NRT
  mainImage.src = "images/nrt.jpg";
  mainImage.srcset = "images/nrt-2x.jpg 2x";
}

// first/blue image   -> navImages[0]
// second/green image -> navImages[1]
// third/red image    -> navImages[2]

// Add event listeners to each nav image
navImages[0].addEventListener("click", lgaImage);
navImages[1].addEventListener("click", cdgImage);
navImages[2].addEventListener("click", nrtImage);