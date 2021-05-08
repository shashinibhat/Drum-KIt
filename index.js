var i;
//getting the number of buttons.
var totalButtons = document.querySelectorAll(".drum").length;


//adding sound to all the buttons.
//listener for clicks.
for (i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    //adding animation to the button.
    buttonAnimation(buttonInnerHtml);


  })

}
//keyboard listener.
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  //adding animation to the button.
  buttonAnimation(event.key);
})
//sound for clicks and keyboard.
function makeSound(key)
{
  switch (key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default: console.log(key);

  }
}
//To add Animation to the button pressed.
function buttonAnimation(buttonKey)
{
  var buttonPressed = document.querySelector("."+buttonKey);
  buttonPressed.classList.add("pressed");

setTimeout(function(){
  buttonPressed.classList.remove("pressed");
},200)
}
