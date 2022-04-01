const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// startsWith() method checks if the string starts with the particular string.



//-------------------------Using lastIndexOf()---------------------------------------

// program to check if a string starts with another string

const string2 = 'hello world';

const toCheckString2 = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

//-------------------------------Using regex-----------------------------------------

const string3 = 'hello world';

const pattern = /^he/;

let result3 = pattern.test(string);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// /^ indicates the starting of the string.