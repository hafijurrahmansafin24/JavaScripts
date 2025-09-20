//! Fahrenheit to Celsius Calculator -->>
var fahrenheit = parseFloat(prompt("Enter Fahrenheit = "));

var celsius = (fahrenheit - 32) * (5/9);

document.write("Celsius = " + celsius + "<br/>");


//! Celsius to Fahrenheit Calculator -->>
var celsius = parseFloat(prompt("Enter Celsius = "));

var fahrenheit = (celsius * (9/5)) + 32;

document.write("Fahrenheit = " + fahrenheit);
