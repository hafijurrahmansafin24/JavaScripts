//! Guessing Game -->>

var numOfWin = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        console.log("You have win")
        numOfWin++;
    }
    else {
        console.log("You have lost. Random number was " + randomNumber);
        numOfLost++;
    }
}

document.write("Total Number of Win = " + numOfWin + "<br>");
document.write("Total Number of Lost = " + numOfLost);
