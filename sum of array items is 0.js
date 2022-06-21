let arr1 = [-3, -2, -1, 0, 1, 2, 3]

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {

        if (arr1[i] + arr1[j] === 0) {
        console.log(arr1[i], arr1[j])
        }
    }

}

//............using multiple pointer.......................


let arr2 = [-3, -2, -1, 0, 1, 2, 3]

sumZero(arr2)

function sumZero(arr2){
    let left = 0;
    let right = arr2.length - 1

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






