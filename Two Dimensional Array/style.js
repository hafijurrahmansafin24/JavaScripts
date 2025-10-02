//! 2D Array(Two Dimensional Array) -->>

var playersInfo = [
    ["Safin", " 65,"], [" Hafsa", " 75,"], [" Barna", " 35,"], [" Sabbir", " 45,"], [" Rayhan", " 55"]
];

for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 2; y++) {
        document.write(playersInfo[x][y]);
    }
}


//! Task : Create a function called highestRunScorer that will 
    //! . Receive a 2d array called playersInfo 
    //! . Based on highest ScreenOrientation, return the name of the player//! 

function highestRunScorer(playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (var x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}

var playersInfo = [
    ["Safin", 28], [" Hafsa", 88], [" Barna", 18], [" Sabbir", 34], [" Rayhan", 68]
];

var name = highestRunScorer(playersInfo);
document.write("<br>" + name);
