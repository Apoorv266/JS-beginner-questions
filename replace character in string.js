//---------------Replace All Instances Of a Character Using Regex------------------

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");   // first is which one is to be replaced and second is by which it has to be replaced

console.log(result);


//--------------------------Using Built-in Methods-----------------------------

// program to replace all instances of character in a string

const string2 = 'Learning JavaScript Program';

const splitString = string.split('a');  // ["Le", "rning J", "v", "Script Progr", "m"] //The split('a') method splits the string into an array.

const result2 = splitString.join('A'); //LeArning JAvAScript ProgrAm 
// he join('A') method joins all the array elements into a string by adding A between each array element.

console.log(result);