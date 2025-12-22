// ES6 ( map array function) -->>
var numbers = [2, 3, 4, 5];

var squareNumbers = numbers.map(function(x) {
    return x * x;
});
console.log(squareNumbers);


// ES6 (filter array function) -->>
var number = [32, 40, 22, 4, 11, 78, 57];

var newNumbers = number.filter(function(x) {
    return x > 30;
});
console.log(newNumbers);
