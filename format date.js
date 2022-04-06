// get current  date
let currentDate = new Date();
console.log(currentDate)

// get the day from the date
let day = currentDate.getDate();
console.log("day is",day)

// get the month from the date
let month = currentDate.getMonth() + 1;  //1 is added to the getMonth() method because month starts from 0. Hence, January is 0, February is 1, and so on.
console.log("month is",month)

// get the year from the date
let year = currentDate.getFullYear();
console.log("year is",year)

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);