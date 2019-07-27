$(document).ready(
  function() {




    var gamePattern = [];
    var theLevel = 1;
    var randomChosenColour;
    var gameStarted = false;

    function nextSequence() {
      var randomNumber = Math.floor(Math.random() * 4);
      randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);

      console.log("gamePattern: " + gamePattern);


    }

    var buttonColours = ["red", "blue", "green", "yellow"];



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
    var wrongAudio = new Audio("sounds/wrong.mp3");


    var chooseButton = function(buttonColour) {

      $("#"+buttonColour).addClass("pressed");

      setTimeout(function(){
      $("#"+buttonColour).removeClass("pressed")}, 200);


      console.log("User input: " + buttonColour);
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
      checkGameStatus();
    }



    function checkGameStatus() {
      if (gameStarted != true) {
        restartGame();
      }
    }


    var userChosenPattern = [];

    function handdler(userChosenColour) {

      userChosenPattern.push(userChosenColour);
      console.log("userChosenPattern: " + userChosenPattern);
      console.log("gamePattern: " + gamePattern);
      console.log("gameStarted: " + gameStarted);
      if (gameStarted == true) {
        console.log("userChosenPattern.length: " + userChosenPattern.length);
        console.log("gamePattern.length: " + gamePattern.length);


        for (var i = 0; i < userChosenPattern.length; i++) {
          if (userChosenPattern[i] != gamePattern[i]) {
            restartGame()
          }
        }

        if (userChosenPattern.length == gamePattern.length) {
          nextSequence();
          theLevel++;
          $("h1").text("Level " + theLevel);
          userChosenPattern = [];
        }





      }




    }


    // $(document).keypress(function(event){
    //   $("h1").text("Level " + theLevel);
    //   console.log(event.key);
    // });

    $(document).on("keypress", function(event) {
      console.log(event.key);
      gamePattern = [];
      theLevel = 1;
      userChosenPattern = [];
      nextSequence();
      $("h1").text("Level " + theLevel);
      gameStarted = true;

    });


    function restartGame() {
      gameStarted = false;
      $("h1").text("Game Over, Press Any Key to Restart");
      $("body").css("background-color", "red");
      setTimeout(function() {
        $("body").css("background-color", "#011F3F");
      }, 500);
      wrongAudio.play();


    }


  }

);
