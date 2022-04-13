//....................Using indexOf() and push()....................

// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);

// the indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().