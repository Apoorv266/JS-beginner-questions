
//...........check palindrome (process 1).................................

let str = "radar"
func(str);


// in the first loop we will interate all values of str from front
// in second loop we will iterate all values of str from behind 
// then we will convert both the arrays into string by stringify and check if str is equal from front and back..if yes then its palindrome

function func(str) {
    let arr = []
    console.log(arr)
    for (let i = 0; i <= str.length - 1; i++) {
        arr.push(str[i]);
    }

    let arr2 = []
    console.log(arr2)
    for (let j = str.length - 1; j >= 0; j--) {
        arr2.push(str[j])
    }


    const result = JSON.stringify(arr) == JSON.stringify(arr2)
    console.log(result)

    if (result == true) {
        console.log(`${str} is palindrome`)

    }

    else {
        console.log("are not palindrome")
    }
}

//...........check palindrome (process 1).................................

console.log("..........................")


function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;
    console.log(len)
    console.log(len/2)

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {   
            
            //string is broken into two halves and first half is checked from behind half..if both are equal then its palindrome and if not equal , not a palindrome

            // string[i] = r,a,d,a,r (from front)
            // string[len - 1 - i] = r,a,d,a,r (from behind)

            // since string[i] == string[len - 1 - i] ==> this if will exit 

            //this if condition will check all the values from front and back and if anyone of the digit becomes unequal then it will print 'It is not a palindrome'


            return 'It is not a palindrome';
        }
    }
    return `${str} is palindrome`;
}

// take input
const string = "radar";

// call the function
const value = checkPalindrome(string);

console.log(value);