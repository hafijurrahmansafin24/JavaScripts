// ES6(Variable Declaration) -->>
let x = 12;

for(let x = 1; x <= 11; x++) {
    console.log(x);
}
document.write(x + "<br>");


var a = 25;
var b = 30;

console.log(`sum is ${a + b} . the end`);



let name = "Safin";

let message = `I am ${name}. I am learning JavaScript`;
document.write(message);


// ES6(Function Declaration) -->>
const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(20, 30);
