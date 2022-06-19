// // A
// // B + B
// // C + C + C
// // D + D + D + D


// console.log(arr2)
// console.log(arr3)

var i, j;
for (i = 65; i <= 68; i++) {
    // console.log(i)
    for (j = 65; j <= i; j++) {
        console.log(String.fromCharCode(i));
        console.log("i is", i)
        console.log( "j is" ,j)
        console.log("-------------")
    }
}



console.log("............Alternating way...............")



for (let i = "A".charCodeAt(0), j = 1; j <= 4; i++, j++) {
    console.log((new Array(j).fill(String.fromCharCode(i))).join("+"));
}

console.log(String.fromCharCode(66))

console.log(new Array(1).fill("D"))