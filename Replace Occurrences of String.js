//------Replace All Occurrence of String Using RegEx--------------------

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);  //Mr blue has a blue house and a blue car

//---------Replace All Occurrence of String Using built-in Method----------------

// program to replace all occurrence of a string

const string2 = 'Mr red has a red house and a red car';

const result = string2.split('red').join('blue');

console.log(result);