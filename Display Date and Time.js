// get date and time
const date = new Date(2017, 2, 12, 9, 25, 30);  // new Date() constructor is used to create a date objec

// get the date as a string
const n = date.toDateString(); // toDateString() method returns the date portion of a Date object.

// get the time as a string
const time = date.toLocaleTimeString(); // toLocaleTimeString() method returns the time portion of a Date object.

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);