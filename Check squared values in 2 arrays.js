// create a program to check if value in one array are squared values in 2nd array
let arr1 = [2, 3, 4]

let arr2 = [4, 9, 16]


function checkSqa(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; i < arr2.length; j++) {

            if (arr1[i] * arr1[i] === arr2[j]) {
                console.log("All items are double")
            }

            else{
                console.log("All items are not double")
            }

        }

    }
}

checkSqa(arr1, arr2)