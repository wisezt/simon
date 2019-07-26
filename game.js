$(document).ready(
function(){




  var gamePattern = [];

  function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }

  var buttonColours = ["red", "blue", "green", "yellow"];

  var randomChosenColour = buttonColours[nextSequence()];

  gamePattern.push(randomChosenColour);


  $("#green").on("click",
  function(){
    chooseButton("green")
  });

  $("#red").on("click",
  function(){
    chooseButton("red")
  });

  $("#yellow").on("click",
  function(){
    chooseButton("yellow")
  });

  $("#blue").on("click",
  function(){
    chooseButton("blue")
  });



  // $("#red").on("click", chooseButton("red"));
  // $("#yellow").on("click", chooseButton("yellow"));
  // $("#blue").on("click", chooseButton("blue"));


  var chooseButton = function(buttonColour) {
    switch (buttonColour) {
      case "green":
        $("#green").hide();


        break;

      case "red":
      $("#red").hide();

        break;

      case "yellow":
      $("#yellow").hide();

        break;

      case "blue":
      $("#blue").hide();

        break;






      default:

    }



  }





}

);
