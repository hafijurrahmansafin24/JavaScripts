// setTimeOut() -->>
setTimeout(() => {
    console.log("hi");
}, 2000);


setTimeout(display, 3000);

function display() {
    console.log("display function");
}


const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", saveUser);

function saveUser() {
    message.textContent = "User Registration Successfully";

    setTimeout(() => {
        message.textContent = "";
    }, 5000);
}
