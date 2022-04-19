// find common values from the 2 arrays

function performIntersection(array1, array2) {

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

const array1 = [1, 2, 4, 3, 5, 9];
const array2 = [1, 3, 4, 5, 8];

performIntersection(array1, array2);

