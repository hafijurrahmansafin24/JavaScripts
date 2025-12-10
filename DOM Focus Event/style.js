const input = document.querySelector("input");

input.addEventListener("blur", function (event) {
    input.style.backgroundColor = "transparent";
    input.style.padding = "0";
    input.value = event.target.value.toUpperCase();
});


input.addEventListener("focus", function () {
    input.style.backgroundColor = "tomato";
    input.style.padding = "2rem";
});


input.addEventListener("focusin", function () {
    console.log("focusin is occured");
});


input.addEventListener("focusout", function () {
    console.log("focusout is occured");
});
