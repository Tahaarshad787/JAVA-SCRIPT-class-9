// Assignment # 31-34(DATE METHODS):-

// Q1
// var date = new Date();
// document.write(date);

// Q2
// var date = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonth = monthNames[date.getMonth()];
// alert("Current Month: " + currentMonth);

// Q3
// var now = new Date();
// var daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDay = daysNames[now.getDay()];
// alert("Today is " + currentDay.slice(0,3));

// Q4
// var now = new Date();
// var day = now.getDay();

// if (day === 0 || day === 6) {

//     alert("It's Fun day");

// }

// else{

//     alert("Its a regular day");
// }

// Q5
// var date = new Date();
// var dayOfMonth = date.getDate();

// if (dayOfMonth < 16) {

//     alert("First fifteen days of the month");

// }

// else {

//     alert("Last days of the month");

// }

// Q6
// var currentDate = new Date();
// console.log("Current Date: " + currentDate);

// var milliSeconds = currentDate.getTime();
// console.log("Elapsed milliseconds since January 1, 1970: " + milliSeconds);

// var minutes = (currentDate.getTime() / 1000 / 60)
// console.log("Elapsed minutes since january: " + minutes);

// Q7
// var date = new Date();
// var hours = date.getHours();

// if (hours < 12) {

//     alert("It's AM");

// } 

// else {

//     alert("It's PM");

// }

// Q8
// const lastMonthLastDay = new Date(2021, 0, 1);

// const laterDate = new Date(lastMonthLastDay.getTime() - (24 * 60 * 60 * 1000));

// console.log("Later Date: " + laterDate);

// Q9
// var ramadanStartDate = new Date(2015, 5, 18);

// var currentDate = new Date();

// var timeDifference = currentDate - ramadanStartDate;

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert(`${daysPassed} Days have passed since 1st Ramadan, 2015`);

// Q10
var referenceDays = new Date(2015, 11, 5);

var startOf2015 = new Date(2015, 0, 1);

var timeDifference = referenceDays - startOf2015;

var second = (timeDifference * 1000);

console.log(`On reference date ${referenceDays}, ${second} seconds had passed since beginning of 2015.`)
