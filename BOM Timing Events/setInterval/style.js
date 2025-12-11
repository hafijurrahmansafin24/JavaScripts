// setInterval() -->>
const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");


saveButton.addEventListener("click", displayCount);

function displayCount() {
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);
}
