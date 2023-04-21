var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;
var gameStarted = false;


$(document).keypress( function() {
    if (!gameStarted) {
        gameStarted = true;

        $("#level-title").text("Level " + level);
        nextSequence();
    }
    
})


$(".btn").click(function () {
    var userChosenColor = $(this).attr('id');
    
    userClickedPattern.push(userChosenColor);
    
    playSound(userChosenColor);

    // add animation to user clicks
    animatePress(userChosenColor);

    // checking answer 
    checkAnswer(userClickedPattern.length - 1);

    $("#level-title").text("Level " + level);
});


function nextSequence() {
    userClickedPattern = []

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    
    // console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    // animate the button
    $("#" + randomChosenColor).fadeOut(150).fadeIn(150);

    playSound(randomChosenColor)
    level++;
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();        
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");

    // removing the pressed class after delay of 100ms
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed")
    }, 100);
}


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            
            // calling the nextSequence function after 1000ms delay
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        // console.log("wrong");

        playSound("wrong");

        // add game-over class to h1
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Change the title of h1
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}

function startOver() {
    gamePattern = [];
    level = 0;
    gameStarted = false;
}
