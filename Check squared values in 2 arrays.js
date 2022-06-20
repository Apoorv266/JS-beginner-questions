// create a program to check if value in one array are squared values in 2nd array


let arr1 = [2, 3, 4]

let arr2 = [42, 92, 16]


function checkSqa(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] * arr1[i] === arr2[j]) {
                console.log("All items are double")
            }

            // else{
            //     console.log("All items are not double")
            // }

        }

    }
}

checkSqa(arr1, arr2)


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
