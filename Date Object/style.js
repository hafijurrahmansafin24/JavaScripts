//! Date Object -->>
var date = new Date();
document.write("Full Date Information = " + date + "." + "<br>");

var currentYear = date.getFullYear();
document.write("Current Year = " + currentYear + "<br>");

var currentMonth = date.getMonth();
document.write("Current Month = " + currentMonth + "<br>");

var currentDates = date.getDate();
document.write("Current Date = " + currentDates + "<br>");

var currentDay = date.getDay();
document.write("Current Day = " + currentDay + "<br>");

var currentHours = date.getHours();
document.write("Current Hours = " + currentHours + "<br>");

var currentMinutes = date.getMinutes();
document.write("Current Minutes = " + currentMinutes + "<br>");

var currentSeconds = date.getSeconds();
document.write("Current Seconds = " + currentSeconds);
