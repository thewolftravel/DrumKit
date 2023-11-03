// Detecting button pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard button pressed
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

// JQuery
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

// Applying functions to each key and each button
function makeSound(key) {
  switch (key) {
    case "w":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "a":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var tom1 = new Audio("./sounds/snare.mp3");
      tom1.play();
      break;

    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }
}

// Adding animation to each button by adding a new class and delaying the animation with TimeOut function
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
