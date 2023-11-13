let day = new Date().getDay() // creating a date and getting the day in the same line of code

let reply; // initializing reply

// verify day in console
console.log("Day: ", day) // Sunday is 0, Monday is 1

// we have class on Mondays (1) and Wednesdays (3)
if (day == 1 || day == 3) {
    reply = "Yes, you have Web Design today.";
} else if (day == 6 || day == 0 ){ // Saturday or Sunday
    reply = "On the weekend?";
} else {
    reply = "No, you do not have class today.";
}

console.log(reply, day);
let answer = document.getElementById("answer");
answer.textContent = reply;