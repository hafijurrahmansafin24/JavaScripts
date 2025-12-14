// ES6(Spread Operator) -->>
function addNumbers(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
console.log(addNumbers(...numbers));


let numbers1 = [...numbers, 4, 5];
console.log(numbers1);


numbers2 = [6, 7, 8];
let number = [...numbers1, ...numbers2];
console.log(number);


let p1 = {
    Name: "Safin",
    Age: 21
}

let p2 = {
    Nationality: "Bangladesh",
    Occupation: "Student"
}

let p = {...p1, ...p2};
console.log(p);
