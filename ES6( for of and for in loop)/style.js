// ES6( for...of loop) -->>
const names = ["s1", "s2", "s3"];
for(let name of names) {
    console.log(name);
}


// ES6(for...in loop) -->>
let students = {
    ID: 101,
    name: "Safin",
    cgpa: 3.5
}

for(let x in students) {
    console.log(`${x}: ${students[x]}`);
}
