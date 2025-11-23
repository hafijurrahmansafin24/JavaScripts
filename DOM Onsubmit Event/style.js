const form = document.querySelector("form");
const name = document.querySelector("div #name");
const email = document.querySelector("div #email");
const password = document.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(event) {
    event.preventDefault();
    
    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    console.log(userInfo);

    name.value = "";
    email.value = "";
    password.value = "";
}
