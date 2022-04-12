//..................Add Element to Array Using unshift().......................

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];
// calling the function

// passing array argument
addElement(array);

//.................Add Element to Array Using splice()........................

// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}
const array2 = [1, 2, 3];

// calling the function
addElement(array2);

// In the splice() method,
// The first argument is the index of an array where you want to add an element.
// The second argument is the number of elements that you want to remove from the index element.
// The third argument is the element that you want to add to the array.


//...............Add Element to Array Using Spread Operator..................

function addElement(arr) {
    // adding element to array
    arr = [4, ...arr];
    console.log(arr);
}

const array3 = [1, 2, 3];

// calling the function
addElement(arr);


//....................Add Element to Array Using concat().....................

function addElement(arr) {

    // adding element to array
    arr = [4].concat(arr);
    
    console.log(arr);
}

const array4 = [1, 2, 3];

// calling the function
addElement(array4);