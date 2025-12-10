const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function (event) {
    if(event.repeat) {
        alert("do not repeat");
    }
});


textarea.addEventListener("keypress", function () {
    console.log("keypress");
});


textarea.addEventListener("keyup", function (event) {
    console.log(event.key);
    console.log(event.code);
    if(event.shiftKey) {
        console.log("shirt+" + event.key);
    }
});
