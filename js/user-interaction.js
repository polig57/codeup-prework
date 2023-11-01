"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
// let userName = prompt('What is your name?')
var userName = prompt('What is your name?')
while (userName === null || userName === "") {
    var userName = prompt('What is your name?')
} 
// TODO: Show an alert message that welcomes the user based on their input.
alert('Welcome ' + userName);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var pizzaLover;
if (confirm('Do you like Pizza? Click OK') == true) {
    alert("3 hipps followed by a hurray for the pizza lover")
} else {
    alert("Thats  okay..")
}
