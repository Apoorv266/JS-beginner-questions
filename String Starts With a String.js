const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// startsWith() method checks if the string starts with the particular string.



//-----------------Using lastIndexOf()-------------------------

// program to check if a string starts with another string

const string = 'hello world';

const toCheckString = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}