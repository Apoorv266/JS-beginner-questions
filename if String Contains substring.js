//-----------------Check String with includes()---------------------

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

// The includes() method is case-sensitive
// if...else statement to check whether a string contains the characters of a specified string.

//---------------Check String with indexOf()--------------------------

// take input
const str2 = prompt('Enter a string:');
const checkString2 = prompt('Enter a string that you want to check:');

if(str.indexOf(checkString) !== -1) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

// The indexOf() method searches a string and returns the position of the first occurrence. When a substring cannot be found, it returns -1.