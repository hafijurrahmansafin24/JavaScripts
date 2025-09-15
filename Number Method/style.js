var num = 20;
num = toString(num);
console.log(typeof(num));

var num = 20;
num = parseInt(num);
console.log(typeof(num));

var num = 20.5;
num = parseFloat(num);
console.log(typeof(num));

var num = 2.5678;
console.log(num.toFixed(3));

var num = 3.789;
console.log(num.toPrecision(3));

console.log(Number("12"));

console.log(Number(true));

console.log(Number(false));