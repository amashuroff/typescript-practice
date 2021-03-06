const button = document.querySelector("button")!; // developer assures the button exists

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "The button"));
}
