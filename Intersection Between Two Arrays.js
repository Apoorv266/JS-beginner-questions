// find common values from the 2 arrays

function performIntersection3(array1, array2) {

    let arr = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                arr.push(array2[j])
            }
        }
    }
    console.log(arr)
}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

performIntersection3(array1, array2);


//...................Perform Intersection Using Set................................

function performIntersection(arr1, arr2) {
    const setA = new Set(arr1)
    const setB = new Set(arr2)

    let arr = []

    for (let i of setB) {

        if (setA.has(i)) {
            arr.push(i)
        }
    }
    return arr;
}
const array3 = [1, 2, 3, 5, 9];
const array4 = [1, 3, 5, 8];

const result = performIntersection(array3, array4);
console.log(result);


//.................Perform Intersection Using filter() Method.....................

function performIntersection2(arr1, arr2) {
const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1)

// x represents the each item of array6 aur ek ek item arr1 ka arr2 me pass hogi aur unka index check kiya jaega arr2 me...agar item jo arr1 me h aur arr2 me nhi h to indexof -1 aega aur jo jo item arr1 me h aur arr2 me bhi h to indexof -1 nhi aega aur vo vo item arr1 me add ho jaega 

//!== mtlb arr1 ka item jo arr2 me h aur item nhi hoga toh -1 return krega aur kab nhi karega jab item arr2 me hoga

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.

return intersectionResult;
}
const array6 = [1, 2, 3, 5, 9];
const array7 = [1, 3, 5, 8];

const result2 = performIntersection2(array6, array7);
console.log(result2);

