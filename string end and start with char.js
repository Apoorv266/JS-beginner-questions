// program to check if a string starts with 'S' and ends with 'G'\

let str = "ShegewG";

func(str)
function func(str) {
    if (str.startsWith('S') && str.endsWith('G')) {
        console.log("string start with S and ends with G")
    }
    else if (str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
    else if (str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// The startsWith() method checks if the string starts with the particular string.
// The endsWith() method checks if the string ends with the particular string.




// program to check if a string starts with 'S' and ends with 'G' using regex------------

function checkString(str) {

    // check if the string starts with S and ends with G
    if (/^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if (/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
    else if (/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
// Loop is just to take 3 different values at onces nothing else
for (let i = 0; i < 3; i++) { 

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}

// The /^S/i pattern checks if the string is S or s. Here, i denotes that the string is case-insensitive. Hence, S and s are considered the same.
// The /G$/i patterns checks if the string is G or g.
