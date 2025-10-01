//! Array Library Methods -->>

var names = ["Safin", " Hafsa", " Barna", " Sabbir", " Rayhan"];
document.write("Names = " + names + "<br>");

//! Shift opposite of pop Methods -->>
names.shift();
document.write(names + "<br>");

//! Unshift opposite of push Methods -->>
names.unshift(" Imon");
document.write(names + "<br>");

//! Splice Methods -->>
var newArray = names.slice(3);
document.write(newArray + "<br>");

//! Adding Elements Using Splice Methods -->>
names.splice(2, 0, " Shihab", " Rubayet");
document.write(names + "<br>");

//! Remove Elements Using Splice Methods -->>
names.splice(1, 2);
document.write(names + "<br>");

//! Sort Methods -->>
var sortedNames = names.sort();
document.write(sortedNames + "<br>");

//! Reverse Sort Methods -->>
var sortedNames = names.sort();
names.reverse();
document.write(sortedNames + "<br>");

//! Sort Number Methods -->>
var Numbers = [20, 5, 40, 50, 2];
Numbers.sort(function(a, b) {
    return a - b;
});
document.write(Numbers + "<br>");

//! Reverse Sort Number Methods -->>
var Numbers = [20, 5, 40, 50, 2];
Numbers.sort(function(a, b) {
    return b - a;
});
document.write(Numbers);