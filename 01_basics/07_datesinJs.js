// Dates in JS

let myDate = new Date()
console.log(myDate.toString());
// Sat Aug 03 2024 13:39:19 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());         // Sat Aug 03 2024
console.log(myDate.toISOString());          // 2024-08-03T13:44:38.238Z
console.log(myDate.toJSON());               // 2024-08-03T13:44:38.238Z
console.log(myDate.toLocaleDateString());   // 8/3/2024
console.log(myDate.toLocaleString());       // 8/3/2024, 1:45:47 PM
console.log(myDate.toLocaleTimeString());   // 1:45:47 PM
// console.log(myDate.toUTCString());       // Sat, 03 Aug 2024 13:45:47 GMT

console.log(typeof myDate); // => object (imp for interviews)

let myCreatedDate = new Date(2003, 0, 21); // sytax : yr, month, day
// Months starts from 0 in JS

let myCreatedDate = new Date("2023-01-23"); // yy/mm/dd
// console.log(myCreatedDate.toDateString());

let myCreatedDateAndtime = new Date(2003, 0, 21, 5, 20);// date with time
// console.log(myCreatedDateAndtime.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // give milliseconds

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

/*
getDay() => 0 - sunday
getDay() => 1 - monday
        -
        -
        -
getDay() => 6 - saturday
*/

let currDay = newDate.toLocaleDateString('default', {
    weekday : "short"
});

// console.log(mi); // sun, mon tue

