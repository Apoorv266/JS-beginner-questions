// write a JavaScript program to compare two strings using various methods.

//----------------------------Using toUpperCase()------------------------------------

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

const result = string1.toUpperCase() === string2.toUpperCase();

if (result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

//--------------------------Comparison Using RegEx-------------------------------------

const stringa = 'JavaScript Program';
const stringb = 'javascript program';

const pattern = new RegExp(string1, "gi");

const result2 = pattern.test(string2)

if(result2) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


//-------------------------Using localeCompare()-------------------------------------------

const stringc = 'JavaScript Program';
const stringd = 'javascript program';

const result3 = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// localeCompare() method is used to perform case insensitive string comparison

// localeCompare() method returns a number that indicates whether a reference string comes before, or after, or is the same as the given string.

// Here, { sensitivity: 'base' } treats A and a as the same.

