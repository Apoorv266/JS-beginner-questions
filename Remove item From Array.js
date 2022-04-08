//---------------------Using Array.splice()-----------------------------


function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if (index > -1) {

        // remove item
        array.splice(index, 1); //splice() method is used to remove the element from an array.
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3, 4, 5], 2);

console.log(result);

//..............................Using For Loop...............................

function removeItemFromArray(array, n) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result2 = removeItemFromArray([1, 2, 3 , 4 , 5], 2);
console.log(result2);
