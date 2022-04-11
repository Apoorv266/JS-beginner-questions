//....................Check Array Using Array.isArray()............................
function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}
const array = [1, 2, 3];

// call the function
checkObject(array);

// Array.isArray() method is used to check if an object is an array
// The Array.isArray() method returns true


//.................................(Extra knowledge)...................................


// Note: For an array, the typeof operator returns an object.

// For example,

// const arr = [1, 2, 3];
// console.log(typeof arr); // object