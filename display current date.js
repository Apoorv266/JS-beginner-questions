// get local machine date time
const date = new Date(); // gives the current date and time.

// get the date as a string
const n = date.toDateString();   // Wed Aug 26 2020

// get the time as a string
const time = date.toLocaleTimeString();  // 1:13:12 PM

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);