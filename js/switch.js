"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    case "red":
        console.log(color + " is the color of a little corvette");
        break;
    case "orange":
        console.log(color + " is the color of a tangerine");
        break;
    case "yellow":
        console.log(color + " is the color of a school bus");
        break;
    case "green":
        console.log(color + " is the color of a grass");
        break;
    case "blue":
        console.log(color + " is the color of a sky");
        break;
    case "indigo":
    case "violet":
        console.log("I do not know anything by that color.");
        break;

    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}
