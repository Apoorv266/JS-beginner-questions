// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');
console.log("unsorted array",words)

// elements inside word array is sorted from a -> z 
words.sort()
console.log("array from a -> z", words)

// elements inside word array is sorted from z -> a 
words.sort()
words.reverse()
console.log("array from z -> a",words)





for(const elements of words){
    console.log(elements)
}