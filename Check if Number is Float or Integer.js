// program to check if a number is a float or integer value

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){

        //The isNaN() method checks if the passed value is a number.
    
        // check if it is integer
        if (Number.isInteger(x)) {
            //The Number.isInteger() method is used to check if the number is an integer value.
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);


//......................................Using Regex...................................

// program to check if a number is a float or integer value

function checkNumber2(x) {

    let regexPattern = /^-?[0-9]+$/;

    //The pattern /^-?[0-9]+$/ looks for the integer value.
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber2(44);
checkNumber2(-44);
