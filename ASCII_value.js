
// program to find the ASCII value of a character

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);

// charCodeAt() method is used to find the ASCII value of a character.
// If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives NaN.