/*
Toggle color mode
With session storage
*/

// access elements
let icon = document.getElementById('color-mode-icon');
let background = document.querySelector('body');
// access links on the page
let headerLink = document.querySelector('header > h1 > a');
let navLinks = document.querySelectorAll('nav > a');
let footerLink = document.querySelector('footer > p > a');

function darkMode() {
  // change styles to dark mode with class
  background.classList.add('dark');
  icon.classList.add('dark');
  headerLink.classList.add('dark');
  navLinks[0].classList.add('dark');
  navLinks[1].classList.add('dark');
  navLinks[2].classList.add('dark');
  navLinks[3].classList.add('dark');
  footerLink.classList.add('dark');
}

function lightMode() {
  // change styles back to light mode by removing class
  background.classList.remove('dark');
  icon.classList.remove('dark');
  headerLink.classList.remove('dark');
  navLinks[0].classList.remove('dark');
  navLinks[1].classList.remove('dark');
  navLinks[2].classList.remove('dark');
  navLinks[3].classList.remove('dark');
  footerLink.classList.remove('dark');
}

// check if the user has set a preferred color scheme
if (sessionStorage.colorMode) { // the user has already toggled color mode
  if (sessionStorage.colorMode === 'dark') {
    darkMode(); // call dark mode function
  } else {
    lightMode(); // call light mode function
  }
} else { // no preference set yet, start with light mode
  sessionStorage.setItem("colorMode", "light"); // this part isn't strictly necessary
}

// toggle bewteen color modes
function toggleColorMode() {
  if (sessionStorage.colorMode === 'dark') {
    lightMode(); // call light mode function
    // remember light mode setting
    sessionStorage.colorMode = 'light';
  } else {
    darkMode(); // call dark mode function
    // remember dark mode setting
    sessionStorage.colorMode = 'dark';
  }
}

icon.addEventListener('click', toggleColorMode);