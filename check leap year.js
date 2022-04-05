function checkLeapYear(year) {

     //three conditions to find out the leap year
     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.