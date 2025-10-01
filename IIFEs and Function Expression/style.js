//! IIFEs (Immediately Invokeable Function Expressions) -->>
(function display() {
    console.log("hello");
})();


//! Function Expression -->>
var display2 = function displayMessage() {
    console.log("How are you?");
};
display2();


//! Task : Create an IIFEs that print sum of 2 numbers -->>

function addition(num1, num2){
    sum = num1 + num2;
    document.write("Sum = " + sum + "<br>");
}
addition(5,10);

(function subtraction(num1, num2){
    sub = num1 - num2;
    document.write("Sub = " + sub + "<br>");
})(20,10);

var addition = function addition(num1, num2){
    sum = num1 + num2;
    document.write("Sum = " + sum);
}
addition(20,10);