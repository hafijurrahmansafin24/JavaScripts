const outerDiv = document.getElementById("outer");
const innerDiv = document.getElementById("inner");


outerDiv.addEventListener("click", function () {
    console.log("outer div is called");
}, true);


innerDiv.addEventListener("click", function () {
    console.log("inner div is called");
}, false);
