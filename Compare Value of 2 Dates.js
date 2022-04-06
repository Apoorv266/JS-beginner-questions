const date = new Date();
const date2 = new Date();

// comparisons

// You can then directly compare these two dates using comparison operators >, <, <=, or >=.

const compare1 = d1 < d2;
console.log(compare1);

const compare2 = d1 > d2;
console.log(compare2);

const compare3 = d1 <= d2;
console.log(compare3);

const compare4 = d1 >= d2;
console.log(compare4);

//to use comparison operators like ==, !=, ===, or !==, you have to use date.getTime().

// The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date

const compare5 = d1.getTime() === d2.getTime();  
console.log(compare5);

const compare6 = d1.getTime() !== d2.getTime();
console.log(compare6)