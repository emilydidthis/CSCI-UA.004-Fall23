/*
JavaScript for welcome page
Greets a person by the time of day
*/

let today = new Date(); // new date object; based on number of ms since 1/1/70
console.log(Date.now()); // number of milliseconds since 1/1/1970
let hour = today.getHours(); // current hour method to parse date object
console.log(hour);
let greeting; // initialize variable
let paragraph = document.getElementById('greeting'); // accessing an element on the page

if (hour >= 18) {
  greeting = 'Good evening!';
} else if (hour >= 12) {
  greeting = 'Good afternoon!';
} else if (hour >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Hello!';
}

paragraph.textContent = greeting;