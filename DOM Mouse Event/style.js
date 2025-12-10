console.clear();
const div = document.querySelector("div");

div.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerHTML);
    console.log(event.target.textContent);
    console.log(event.target.innerText);
});


div.addEventListener('dblclick', function () {
    console.log("dblclick is occured");
});


div.addEventListener('mousedown', function () {
    console.log("mousedown is occured");
});


div.addEventListener('mouseup', function () {
    console.log("mouseup is occured");
});


div.addEventListener('mouseenter', function () {
    console.log("mouseenter is occured");
});


div.addEventListener('mouseleave', function () {
    console.log("mouseleave is occured");
});


div.addEventListener('mouseover', function () {
    console.log("mouseover is occured");
});


div.addEventListener('mousemove', function (event) {
    console.log("offsetX = " + event.offsetX + ", offsetY = " + event.offsetY);
});




const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function (event) {
        console.log(event.target.innerText);
    });
});
