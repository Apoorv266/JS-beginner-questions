

//...........................Using concat() and for Loop............................
function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);   // The two arrays are merged using the concat() method.
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {  
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

getUniqueAfterMerge(array1, array2);

// The indexOf() method returns -1 if the element is not in the array.
// Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.



//.......................Using Spread Syntax and Set..........................


function getUniqueAfterMerge(arr3, arr4){
let arr = [...arr3 , ...arr4]  //Two array elements are merged together using the spread syntax ...

   // removing duplicate
   let uniqueArr = [...new Set(arr)];  //spread syntax ... is then used to include all the elements of the set back to an array.

   console.log(uniqueArr);
}

const array3 = [1, 2, 3];
const array4 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array3, array4);