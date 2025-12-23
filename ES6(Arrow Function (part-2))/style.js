// ES6(Arrow Function (part-2)) -->>
var students = [
    {
        id: 101,
        name: "Safin",
        gpa: 4.61
    },

    {
        id: 102,
        name: "Hafsa",
        gpa: 5.00
    },

    {
        id: 103,
        name: "Sabbir",
        gpa: 4.67
    },

    {
        id: 104,
        name: "Barna",
        gpa: 4.50
    }
]


function studentsName1 () {
    return students.filter(function(x) {
        return x.gpa > 4;
    }).map(function(y) {
        return y.name;
    });
}


const studentsName2 = () => students.filter((x) => x.gpa >= 5).map((y) => y.name);

console.log(studentsName1());
console.log(studentsName2());
