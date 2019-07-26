var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}

var buttonColurs= ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColurs[nextSequence()];

gamePattern.push(randomChosenColour);
