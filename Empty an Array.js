//.......................Empty Array by Substituting New Array.......................

function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}

const array = [1, 2 ,3];
const result = emptyArray(array);
console.log(result);


//.......................Empty Array Using splice()................................

function emptyArray(arr) {

    // substituting new array
    arr.splice(0, arr.length);
    return arr;
}

const array2 = [1, 2 ,3];
// call the function
const result2 = emptyArray(array);
console.log(result2);

// In the splice() method,

// The first argument is the index of an array to start removing an item from.
// The second argument is the number of elements that you want to remove from the index element.


//.................Empty Array by Setting Length 0.............................

function emptyArray(arr) {

    // setting array length to 0
    arr.length = 0;

    return arr;
}

const array3 = [1, 2 ,3];

// call the function
const result3 = emptyArray(array);
console.log(result3);

// When setting array.length to 0, all the elements of the array are removed.