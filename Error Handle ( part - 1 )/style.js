// Error handling --> try, catch, finally -->>
try {
    alert("Hi Everyone");
    alert(x);    // Wrong input
    alert("Bye Everyone");
} catch(error) {
    alert("Inside catch block");
    document.write(error + "</br>");
    document.write(error.name + "</br>");
    document.write(error.message);
} finally {
    alert("Bye Everyone");
}
