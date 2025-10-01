
var name1, name2, name3,name4,name5;
name1 = "Safin";
name2 = "Hafsa";
name3 = "Barna";
name4 = "Sabbir";
name5 = "Rayhan";
console.log(name2);


//! Array Function -->>
var names = ["Safin", " Hafsa", " Barna", " Sabbir", " Rayhan"];
document.write("Length = " + names.length + "<br>");
document.write("Names = " + names + "<br>");
document.write(names[0] + "<br>");


//! Push Function -->>
var names = ["Safin", " Hafsa", " Barna", " Sabbir", " Rayhan"];
document.write("Before Length = " + names.length + "<br>");
names.push(" Jubayer");
document.write("After Length = " + names.length + "<br>");
document.write(names[5] + "<br>");


//! Pop Function -->>
var names = ["Safin", " Hafsa", " Barna", " Sabbir", " Rayhan"];
document.write("Before Length = " + names.length + "<br>");
names.pop();
document.write("After Length = " + names.length + "<br>");
document.write(names + "<br>");


//! Concat Function -->>
var country1 = [" Bangladesh", " Japan"];
var country2 = [" Germany", " Nepal"];

var country = country1.concat(country2);
document.write("Countries = " + country);
