//! digit Spelling -->>
var digit = prompt("Enter any digit : ");

switch(digit) {

    case "0":
        document.write("Zero");
        break;

    case "1":
        document.write("One");
        break;

    case "2":
        document.write("Two");
        break;

    case "3":
        document.write("Three");
        break;

    case "4":
        document.write("Four");
        break;

    case "5":
        document.write("Five");
        break;

    case "6":
        document.write("Six");
        break;

    case "7":
        document.write("Seven");
        break;

    case "8":
        document.write("Eight");
        break;

    case "9":
        document.write("Nine");
        break;

    default:
        document.write("Not a digit");
}


//! Input a letter and check it is vowel or consonant using awitch -->>
var letter = prompt("Enter any letter : ");
letter = letter.toLowerCase();

switch(letter) {

case "a":
    console.log("Vowel");
    break;

case "e":
    console.log("Vowel");
    break;

case "i":
    console.log("Vowel");
    break;

case "o":
    console.log("Vowel");
    break;

case "u":
    console.log("Vowel");
    break;

default:
    console.log("Consonant");
}
