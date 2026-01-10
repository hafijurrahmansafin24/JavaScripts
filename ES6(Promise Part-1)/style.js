// ES6(Promise Part-1) -->>
console.log("Welcome");

// how to create a promise - pending, resolve, reject -->>
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed Promise 1");
    }, 2000);
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed Promise 2");
    });
}, 1000);


Promise.race([promise1, promise2])
.then((res) => {
    console.log((res));
});


console.log("Good Bye");
