// Ask the user for their name and store it in Fname
let Fname = prompt("What is your name?");

// Display a welcome message with their name
alert("Welcome, " + Fname + "!");

// Create a constant for Pi
const piValue = 3.1415926;

// Ask the user for their favorite number (used as radius)
let myFavNum = prompt("What is your favorite number?");

// Convert the input to a number
myFavNum = Number(myFavNum);

// Calculate the area of the circle using the formula A = πr²
let myArea = piValue * myFavNum * myFavNum;

// Create a message that shows all the variable values
let message = "Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. ";
message += "If that was the radius of a circle, the area would be " + myArea.toFixed(6) + ".";

// Display the message on the webpage
document.getElementById("output").textContent = message;
