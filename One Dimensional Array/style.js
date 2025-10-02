//! One Dimensional Array -->>

names = ["Safin", " Hafsa", " Barna", " Sabbir", " Rayhan"];

for (var x = 0; x < 5; x++) {
    document.write(names[x]);
}


//! Task : Create a function called highestScore that will
    //!. Receive a 1d array called scores
    //! . Return the highest score

console.clear();
function highestScore(scores) {
    var max = scores[0];
    for (var x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}

let scores = [12, 43, 2, 87, 65];
var maxScore = highestScore(scores);
document.write("<br>" + maxScore);
