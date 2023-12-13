let images = document.querySelectorAll('main > img');
let quote = document.querySelector('footer > p > em');
let earth = document.getElementById("earth-blurb");

function changeOpacity() {
  images[0].style.opacity = '0.5';
  images[1].style.opacity = '0.5';
  images[2].style.opacity = '0.5';
  images[3].style.opacity = '0.5';

  this.style.opacity = '1'; 
}

function resetOpacity() {
  images[0].style.opacity = '1'; 
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
  images[3].style.opacity = '1';
}

images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);
images[3].addEventListener('pointerover', changeOpacity);

images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
earth.style.display = "none";
images[2].addEventListener('pointerout', resetOpacity);
images[3].addEventListener('pointerout', resetOpacity);

images[0].addEventListener('pointerover', ()=> quote.innerText = 'I will never turn my back on people who need me! — Katara');
images[1].addEventListener('pointerover', ()=> quote.innerText = 'I am not Toph. I am Melon Lord! – Melon Lord');

images[2].addEventListener('pointerover', ()=> quote.innerText = "No one can give you your honor. It's something you earn for yourself by choosing to do what's right. – Zuko");
images[3].addEventListener('pointerover', ()=> quote.innerText = 'When we hit our lowest point, we are open to the greatest change – Aang');
