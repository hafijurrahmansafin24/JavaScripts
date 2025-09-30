//! While Loop -->>
var i = 1;

while (i <= 5) {
    document.write(" " + i);
    i++;
}

document.write("<h1>End</h1>");


//! 1 + 2 + 3 + 4 + ... + 10 -->>
var i = 1;
var sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

document.write(sum);
document.write("<h1>End</h1>");


//! 2 + 4 + 6 + 8 + ... + 100 -->>
var i = 2;
var sum = 0;

while (i <= 100) {
    sum = sum + i;
    i = i + 2;
}

document.write(sum);
document.write("<h1>End</h1>");


//! 1 + 3 + 5 + 7 + ... + 99 -->>
var i = 1;
var sum = 0;

while (i <= 99) {
    sum = sum + i;
    i = i + 2;
}

document.write(sum);
document.write("<h1>End</h1>");


//! Task : Write a program that will print sum of all the numbers that divisible by 3 and 5 from 1-100 -->>
var i = 1;
var sum = 0;

while (i <= 100) {
    if(i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;
}

document.write(sum);
document.write("<h1>End</h1>");
