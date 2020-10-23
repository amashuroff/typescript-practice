"use strict";
const button = document.querySelector("button"); // developer assures the button exists
function clickHandler(message) {
    console.log("Clicked " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "The button"));
}
