//! Break -->>
for (var i = 1; i <=100; i++) {
    if (i == 10) {
        break;
    }
    document.write(" " + i);
}

document.write(" End. </br>");


//! Continue -->>
for (var i = 1; i <=100; i++) {
    if (i == 10) {
        continue;
    }
    document.write(" " + i);
}

document.write(" End. </br>");


//! 1 + 3 + 5 + 7 + ... + 99 -->>
for (var i = 1; i <=99; i++) {
    if (i % 2 == 0) {
        continue;
    }
    document.write(" " + i);
}

document.write(" End. </br>")


//! 2 + 4 + 6 + 8 + ... + 100 -->>
for (var i = 2; i <=100; i++) {
    if (i % 2 != 0) {
        continue;
    }
    document.write(" " + i);
}

document.write(" End.")
