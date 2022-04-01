//---------------------------Trim a String------------------------------------


const string = '      Hello World       ';
const result = string.trim();
console.log(result);

// The trim() method removes white space from both sides of the string


//-------------------Trim a String Using RegEx----------------------------------


function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result2 = trimString('    Hello world    ');
console.log(result2);