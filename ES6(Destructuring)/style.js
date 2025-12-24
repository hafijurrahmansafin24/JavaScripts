//! ES6(Destructuring) -->>

// Array Destructuring -->>
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, ...z] = numbers;

console.log(z);


// Swap Destructuring -->>
let a = 10, b = 20;
[a, b] = [b, a]

console.log(a);
console.log(b);


// Object Destructuring -->>
const studentInfo = {
    id: 101,
    fullName: "Hafijur Rahman Safin",
    gpa: 4.61,
    languages: {
        Native: "Bangla",
        Average: "English"
    }
}

const {id, fullName, gpa, languages} = studentInfo

console.log(id);
console.log(fullName);
console.log(gpa);
console.log(languages);


// Destructuring Function Parameters -->>
const studentsInfo = ({id, fullName, gpa, languages}) => {
    console.log(`${id}`);
    console.log(`${fullName}`);
    console.log(`${gpa}`);
    console.log(`${languages.Advance}`);
}

const student = {
    id: 102,
    fullName: "Hafsa Binte Zakir",
    gpa: 5.00,
    languages: {
        Native: "Bangla",
        Advance: "English"
    }

}

studentsInfo(student);
