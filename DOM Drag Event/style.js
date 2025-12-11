const div = document.querySelector("div");
const p = document.querySelector("p");


p.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("Text", event.target.id);
});


div.addEventListener("dragover", function (event) {
    event.preventDefault();
});


div.addEventListener("drop", function (event) {
    let id = event.dataTransfer.getData("Text");
    console.log(id);
    div.appendChild(document.getElementById(id));
    event.preventDefault();
});
