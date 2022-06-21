let arr1 = [-3, -2, -1, 0, 1, 2, 3]

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {

        if (arr1[i] + arr1[j] === 0) {
        console.log(arr1[i], arr1[j])
        }
    }

}









