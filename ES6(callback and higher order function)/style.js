// ES6(callback and higher order function) -->>
function square(x) {
    console.log(`square of ${x}: ${x * x}`);
}


function hugherOrderFunction(num, callback) {
    callback(num);
}
hugherOrderFunction(6, square);


const taskOne = (callback) => {
    console.log("Task1");
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2. Data Loading");
        callback();
    }, 3000);
};

const taskThree = (callback) => {
    console.log("Task3");
    callback();
};

const taskFour = (callback) => {
    console.log("Task4");
    callback();
};

const taskFive = () => {
    console.log("Task5");
};


taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});


document.querySelector("button").addEventListener('click', () => {
    console.log("Button is clicked");
});
