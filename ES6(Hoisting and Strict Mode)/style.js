//! ES6(Hoisting Mode) -->>
x = 20;
if(true) {
    y = 10;
    console.log(`y = ${y}`);
    var y;
}
console.log(`x = ${x}`);
var x;


//! ES6(Strict Mode) -->>
"use strict";
a = 50;
if(true) {
    b = 70;
    console.log(`b = ${b}`);
    var b;
}
console.log(`a = ${a}`);
var a;
