$(document).ready(
  function() {




    var gamePattern = [];

    function nextSequence() {
      var randomNumber = Math.floor(Math.random() * 4);
      return randomNumber;
    }

    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColour = buttonColours[nextSequence()];

    gamePattern.push(randomChosenColour);


    $("#green").on("click",
      function() {
        chooseButton("green")
      });

    $("#red").on("click",
      function() {
        chooseButton("red")
      });

    $("#yellow").on("click",
      function() {
        chooseButton("yellow")
      });

    $("#blue").on("click",
      function() {
        chooseButton("blue")
      });



    // $("#red").on("click", chooseButton("red"));
    // $("#yellow").on("click", chooseButton("yellow"));
    // $("#blue").on("click", chooseButton("blue"));


    var greenAudio = new Audio("sounds/green.mp3");
    var redAudio = new Audio("sounds/red.mp3");
    var blueAudio = new Audio("sounds/blue.mp3");
    var yellowAudio = new Audio("sounds/yellow.mp3");


    var chooseButton = function(buttonColour) {
      switch (buttonColour) {
        case "green":
          $("#green").fadeOut(100).fadeIn(100);
          greenAudio.play();
          handdler("green");
          break;

        case "red":
          $("#red").fadeOut(100).fadeIn(100);
          redAudio.play();
          handdler("red");
          break;

        case "yellow":
          $("#yellow").fadeOut(100).fadeIn(100);
          yellowAudio.play();
          handdler("yellow");
          break;

        case "blue":
          $("#blue").fadeOut(100).fadeIn(100);
          blueAudio.play();
          handdler("blue");
          break;

        default:

      }

    }


var userChosenPattern = [];
function handdler(userChosenColour){

  userChosenPattern.push(userChosenColour);
console.log(userChosenPattern);

}





  }

);
