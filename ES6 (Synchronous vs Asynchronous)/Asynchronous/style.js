// ES6 (Asynchronous) -->>
const taskOne = () => {
    console.log("Task1");
}

const dataLoading = () => {
    console.log("Task2. Data Loading");
}

const taskTwo = () => {
    setTimeout(dataLoading, 2000);
}

const taskThree = () => {
    console.log("Task3");
}

const taskFore = () => {
    console.log("Task4");
}

const taskFive = () => {
    console.log("Task5");
}
taskOne();
taskTwo();
taskThree();
taskFore();
taskFive();
