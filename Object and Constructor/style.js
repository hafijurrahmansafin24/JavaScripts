//! Adding a Object -->>
var student1 = {
    name : "Jubayer Safin",
    age : 21,
    cgpa : 3.75,
    language : ["Bangali", "English", "Hindi"]
}
console.log(student1);

var student2 = {
    name : "Hafsa Binte Jakir",
    age : 29,
    cgpa : 3.92,
    language : ["Bangali", "English", "Hindi", "Urdu"]
}
console.log(student2);

var student3 = {
    name : "Sabbir Rahman",
    age : 21,
    cgpa : 3.50,
    language : ["Bangali", "English", "Hindi"]
}
console.log(student3);


//! Adding Constructor -->>
function student(name, age, cgpa, language) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
}

var student1 = new student("Jubayer Safin", 21, 3.75, ["Bangali", " English", " Hindi"]);
var student2 = new student("Hafsa Binte Jakir", 29, 3.92, ["Bangali", " English", " Hindi", " Urdu"]);
var student3 = new student("Sabbir Rahman", 21, 3.50, ["Bangali", " English", " Hindi"]);

console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.language);


//! Adding function inside a Constructor -->>
function student(name, age, cgpa, language) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;

    this.display = function() {
        document.write(this.name + "<br>");
        document.write(this.age + "<br>");
        document.write(this.cgpa + "<br>");
        document.write(this.language + "<br>" + "<br>");

    }
}

var student1 = new student("Jubayer Safin", 21, 3.75, ["Bangali", " English", " Hindi"]);
var student2 = new student("Hafsa Binte Jakir", 29, 3.92, ["Bangali", " English", " Hindi", " Urdu"]);
var student3 = new student("Sabbir Rahman", 21, 3.50, ["Bangali", " English", " Hindi"]);

student1.display();
student2.display();
student3.display();
