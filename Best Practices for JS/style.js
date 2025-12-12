// user camelCase for naming -->>
let firstName, lastName, userInfo, userEmail;

firstName = "Hafijur Rahman ";
lastName = "Safin";

document.write("<br>" + firstName + lastName + "<br>");


// object and array with const -->>
const names = ["Jubayer", "Safin"];
names.push("Hafsa");
document.write(typeof names);


// access dom less -->>
const ol = document.querySelector(".students-list");
const firstOl = ol.children[0];
console.log(firstOl);


const submitButton = document.querySelector("button");
submitButton.addEventListener("click", () => {
    console.log("clicked");
});
console.log(submitButton);
