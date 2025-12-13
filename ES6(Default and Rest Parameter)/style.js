//! ES6(Default Parameter) -->>
"use strict";
function message(text = "Hello this is a default parameter") {
    console.log(`${text}`);
}
message();
message("I love JS ES6");


//! ES6(Rest Parameter) -->>
function printNumbers(x, y, ...z) {
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}

printNumbers(10, 20, 30, 40, 50);
