//...................Compare Arrays Using JSON.stringify()....................


function compareArrays(arr1, arr2) {

    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if (result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

compareArrays(array1, array2);

// The JSON.stringify() method converts an array into JSON string.


//.........................Compare Arrays using for Loop.........................

function compareArray(arr1, arr2) {
    let result = false

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        
        }
        
        else {
           result = true
        }
    }
    return result
}
const array3 = [1, 13, 5, 8];
const array4 = [1, 13, 5, 8];
const result = compareArray(array3, array4);
if (result === true) {
    console.log("matched")
}
else if (result === false) {
    console.log("not matched")
}

//if one of the value is not matching then it will return false
// if we do it this way => 

// if (arr1[i] === arr2[i]) {
//     return true
// }

// then it wont work because because it will return true immediately after first value is equal and will not check futher values

// the loop will still check all the values if the item values does not match