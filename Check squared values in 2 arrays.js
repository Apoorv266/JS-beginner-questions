// create a program to check if value in one array are squared values in 2nd array


let arr1 = [5, 3, 4]

let arr2 = [4, 25, 16]


function checkSqa(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        // for (let j = 0; j < arr2.length; j++) {

            if (arr2.includes(arr1[i] ** 2)) {
                return true
            }

            else{
                return false
            }

        // }

    }
}

console.log(checkSqa(arr1, arr2))


//----------------------------------------------------------------------------------------


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)  // we one by one double each item of array 1 and check their index in array 2
        if(correctIndex === -1) {  // if the doubled item is not present in array 2---> indexof returns false
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1) // if the doubled item present in the array 2 then with the help of splice that item will be removed from its index (1 represent that 1 item from that particular index has to be removed)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])



console.log("..................................................")


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
