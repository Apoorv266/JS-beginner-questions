// write a JavaScript program that converts the first letter of a string into uppercase.

let str = "javacript"
capitalize(str)
function capitalize(str){
    const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(capitalize)
}

// str.charAt(0) => j
// str.charAt(0).toUpperCase() => J
// str.slice(1) => avaScript
// Two values are concatenated using the + operator


//----------------------capitalize using regex---------------------------------------

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string = "javascript";

const result = capitalizeFirstLetter(string);

console.log(result);