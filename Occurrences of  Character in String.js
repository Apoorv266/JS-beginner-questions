let str = "This is school"

function countString(str, letter) {
let count = 0;
// count would indicate the number of occurences for a character

let temp = {};
for(let i = 0; i < str.length; i++){

    if(str.charAt(i) == letter){

        // we would increase the "count" by 1 if the letter matches any of the character
        count += 1;

        // we would now append key value pairs which consist of index at which character was there(key) and the repeated character(value) to the empty object temp

        temp[i] = str.charAt(i) ;
    }
}
console.log("the letter occured",count);
console.log("the repeated letters are their indexes are",temp)
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);


let obj = {
    hello : 1,
    yellow : 2
}

