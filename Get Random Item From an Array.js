

//............................Get Random Item From an Array.........................


function getRandomItem(arr) {

let arr2 = arr[Math.floor(Math.random() * arr.length)]
return arr2
}


const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);