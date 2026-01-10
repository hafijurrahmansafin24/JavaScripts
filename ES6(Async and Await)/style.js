// ES6 (Async and Await)
console.log("Welcome");

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed");
    });
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed");
        }, 2000);
    });
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed");
    });
}

const taskFour = () => {
    return new Promise((resolve, reject) => {
        reject("task 4 is not completed");
    });
};

const callAllTasks = async () => {
    try {
        const task1 = await taskOne();
        console.log(task1);

        const task2 = await taskTwo();
        console.log(task2);

        const task3 = await taskThree();
        console.log(task3);

        const task4 = await taskFour();
        console.log(task4);
    } catch (err) {
        console.log(err);
    }
};

callAllTasks();

console.log("Good Bye");
