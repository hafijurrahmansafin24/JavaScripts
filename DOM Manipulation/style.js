//! DOM Manipulation -->>

// creating html element -->>
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");

heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);


// remove element -->>
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);
