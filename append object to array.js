//.......................Append Object to Array Using push().........................

// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);

//The push() method adds an item to the end of an array.


//......................Append Object to Array Using splice()...............

// program to append an object to an array

function insertObject(arr, obj) {

    // find the last index
     let index = arr.length;
 
     // appending object to end of array
     arr.splice(index, 0, object);
     
     console.log(arr);
 }
 
 // original array
 let array2 = [1, 2, 3];
 
 // object to add
 let object2 = {x: 12, y: 8};
 
 // call the function
 insertObject(array2, object2);

//  In the splice() method,

// The first argument represents the index where you want to insert an item.
// The second argument represents the number of items to be removed (here, 0).
// The third argument represents the element that you want to add to an array.


//..................Append Object Using Spread Operator.................


// program to append an object to an array

function insertObject(arr, obj) {

    // append object
     arr = [...arr, object];
     
     console.log(arr);
 }

// original array
let array3 = [1, 2, 3];

// object to add
let object3 = {x: 12, y: 8};

// call the function
insertObject(array3, object3);

// The spread syntax allows you to copy all the elements to an array. Then, the object is added to the end of the array.