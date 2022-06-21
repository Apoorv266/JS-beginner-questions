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

function sumZero(arr2){
    let left = 0;
    let right = arr2.length - 1
    console.log(arr2.length)
    console.log(right)

    while (left < right) {
        let sum = arr2[left] + arr2[right]

        if (sum === 0 ) {
            return [arr2[left], arr2[right]]
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}


//........................count unique value in array.............................


let arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]

checkUnique(arr)

function checkUnique(arr){
    let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] ) {
        arr2.push(arr[i])
    }
    
}
console.log(arr2.length)
}



