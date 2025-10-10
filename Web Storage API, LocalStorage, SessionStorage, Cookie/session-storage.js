//! SessionStorage -->>

// session storage setItem -->>
sessionStorage.setItem("user", "Jubayer Safin");

// session storage getItem -->>
const Name = sessionStorage.getItem("user");
console.log(Name);

// session storage remove -->>
sessionStorage.removeItem("user");

// session storage clear -->>
sessionStorage.clear();

// session storage stringyfy -->>
const user = { id: "101", name: "Safin" };
sessionStorage.setItem("user", JSON.stringify(user));

// session storage parse -->>
const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);
