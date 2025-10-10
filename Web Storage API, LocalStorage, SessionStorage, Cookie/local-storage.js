//! LocalStorage -->>

// setItem(key, value) -->>
localStorage.setItem("userName", "Hafijur Rahman Safin");
localStorage.setItem("password", "0123456789");

// getItem(key) -->>
const userName = localStorage.getItem("userName");
const userPassword = localStorage.getItem("password");
console.log(userName, userPassword);

// removeItem(key) -->>
localStorage.removeItem("userName");
localStorage.removeItem("password")

// stringyfy store -->>
const countries = ["Bangladesh", "Japan", "Germany"];
localStorage.setItem("countries", JSON.stringify(countries));

// getItem Perse -->>
const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);

// Clear -->>
localStorage.clear();
