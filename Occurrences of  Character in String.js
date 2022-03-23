let str = "This is school"

function countString(str, letter) {
let count = 0;

let temp = {};
for(let i = 0; i < str.length; i++){
    if(str.charAt(i) == letter){
        count += 1;
        // temp = temp + str.charAt(i)
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

