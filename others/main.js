
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
thumbBar.images = ''
const images = 'url(/images)'
for(image of images){
   thumbBar.images += `${image}`;
}
console.log(thumbBar.image);
/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', "/images/pic1.jpg");
newImage.setAttribute('alt', "Closeup of a blue human eye");
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */