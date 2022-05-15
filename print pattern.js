// // A
// // B + B
// // C + C + C
// // D + D + D + D

// let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// let arr2 = []
// let arr3 = []
// let a = "A"
// for (let i = 0; i < 4; i++) {
//     if (a === arr[i]){
//       arr2.push(arr[i])
//     }
//     a = "C"
// }

// console.log(arr2)
// console.log(arr3)

var i, j;
for (i = 65; i <= 68; i++) {
    // console.log( "i :", i)
    for (j = 65; j <= i; j++) {
        console.log(String.fromCharCode(i));
        // console.log("j :", j)
    }
}


console.log("............Alternating way...............")



for (let i = "A".charCodeAt(0), j = 1; j <= 4; i++, j++) {
    console.log((new Array(j).fill(String.fromCharCode(i))).join("+"));
}

console.log(String.fromCharCode(66))

console.log(new Array(1).fill("D"))