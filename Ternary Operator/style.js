//! Ternary Operator -->>
var number  = Number(prompt("Enter a number"));

var result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);

//! Large Number Check -->>
var number1= prompt("Enter a Number1: ");
var number2= prompt("Enter a Number2: ");
var number3= prompt("Enter a Number3: ");

var result = number1 > number2 && number1 > number3 ? number1 : number2 > number3 && number2 > number1 ? number2 : number3;

console.log("Large Number is: "+ result);
