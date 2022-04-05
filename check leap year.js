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


//-------------------------Check Leap Year Using newDate()--------------------------------

// program to check leap year
function checkLeapYear(year) {

    // The new Date(year, 1, 29) gives the date and time according to the specified arguments.

    // getDate() method returns the day of the month
    const leap = new Date(year, 1, 29).getDate() === 29;  // If a month of February contains 29 days, it will be a leap year.

    // if the input year has date 29 then its a leap year


    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year2 = prompt('Enter a year:');

checkLeapYear(year2);