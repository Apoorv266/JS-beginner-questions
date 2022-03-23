// program to replace a character of a string

// -------------------to replace first instance-----------------------------

const string2 = 'Mr Red has a red house and a red car';

// replace the characters
const newText2 = string2.replace('red', 'blue');

// display the result
console.log(newText2);

// the replace() method is used to replace the specified string with another string.

// When a string is passed in the replace() method, it replaces only the first instance of the string. So if there is a second match in the string, it won't be replaced.


// -------------------to replace all instances-----------------------------

// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);

// /g refers to global. It means that all the matching characters in the string are replaced.

// Since JavaScript is case-sensitive, R and r are treated as different values

