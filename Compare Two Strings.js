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
