//! For Loop -->>
var num1 = parseInt(prompt("Enter the starting number : "));
var num2 = parseInt(prompt("Enter the last number : "));
var sum = 0;

for (var x = num1; x <= num2; x++) {
    sum = sum + x;
}
document.write(sum);


for (var x = 1; x <= 5; x++) {
    var num3 = parseInt(prompt("Enter the first number : "));
var num4 = parseInt(prompt("Enter the second number : "));
var sum = num3 + num4;
console.log("Result = " + sum);
}
