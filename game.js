var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);

    // animate the button
    $("#" + randomChosenColor).fadeOut(150).fadeIn(150);

    playSound(randomChosenColor)
}


$(".btn").click(function () {
    var userChosenColor = $(this).attr('id');
    
    // adding user pattern to array
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);

    playSound(userChosenColor);

});


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();        
}

