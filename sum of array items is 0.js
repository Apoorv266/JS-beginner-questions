// two pointer problem


// let arr1 = [-3, -2, -1, 0, 1, 2, 3]

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {

//         if (arr1[i] + arr1[j] === 0) {
//         console.log(arr1[i], arr1[j])
//         }
//     }

// }

//............using multiple pointer.......................




console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

function sumZero(arr2) {
    let left = 0;
    let right = arr2.length - 1
    console.log(arr2.length)
    console.log(right)

    while (left < right) {
        let sum = arr2[left] + arr2[right]

        if (sum === 0) {
            return [arr2[left], arr2[right]]
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}


//........................count unique value in array.............................


let arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]

checkUnique(arr)

function checkUnique(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr2.push(arr[i])
        }

    }
    console.log(arr2.length)
}

console.log("...........same with 2 pointer approach..............")

let arr9 = [2, 4, 5 , 4, 5, 5, 5, 2, 4, 7, 8, 9, 5, 6, 8]


console.log(checkUnique2(arr9))

function checkUnique2(arr9) {
    if(arr9.length === 0) return 0;  // if the length of the array is 0 then we return 0
    let i = 0                      // initially we will set value of i = 0
    for (let j = 1; j < arr9.length; j++) {  // we will start looping array from index 1 and one by one matches it with item at 0
        if (arr9[i] !== arr9[j]) { // if item at 0 is not equal to item next to it then :-
            i++;   // i will be increased by 1 
            arr9[i] = arr9[j]; // and value of unmatched item in array 2 will take the place of array 1
        }
    }
    return i + 1  // now till index 1 we have unqiue values and in order to get no of elements we till i will add 1
}


