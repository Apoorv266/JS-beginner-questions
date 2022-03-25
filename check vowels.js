// program to count the number of vowels in a string

function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[aeiou]/gi);

    // return number of vowels
    return count;
}

// take input
const string = "dog";

const result = countVowel(string);

console.log(result);

// ---------------------check vowels using loop---------------------------

// program to count the number of vowels in a string

// defining vowels

function countVowel(str) {
    // initialize count
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string2 = prompt('Enter a string: ');

const result2 = countVowel(string2);

console.log(result2);