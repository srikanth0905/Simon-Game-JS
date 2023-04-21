var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);
console.log(gamePattern);


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

