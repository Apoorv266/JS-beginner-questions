// write a program that checks whether the last digit of three numbers is the same or not in JavaScript.

const a = prompt('Enter a first integer: ');
const b = prompt('Enter a second integer: ');
const c = prompt('Enter a third integer: ');
// for logic refer checkarmstongno.js

// last digit is obtained as remainder by dividing by 10 
let d = a % 10
let e = b % 10
let f = c % 10

if (d == e && e == f ){
console.log("numbers have same last digits")
}

else{
    console.log("last digit of numbers are not same")
}


// write a program that checks whether the last digit of three numbers is the same or not in JavaScript.

const x = prompt('Enter a first integer: ');
const y = prompt('Enter a second integer: ');
const z = prompt('Enter a third integer: ');

// for logic refer checkarmstongno.js

// suppose user enters one digit as 223

let h = x % 10      // 223 % 10 ==> 3(remainder and second last digit)
let m = parseInt(x / 10);  // 223/10 == 22.3 ---> converting to integer = 22
let k = m % 10  //22% 10 = 2 (remainder and second last digit)
console.log(`last 2 digits are ${h}, ${k}`)


let i = y % 10
let l = parseInt(y / 10); 
let t = l % 10
console.log(`last 2 digits are ${t}, ${i}`)


let j = z % 10
let w = parseInt(z / 10); 
let u = w % 10
console.log(`last 2 digits are ${u}, ${j}`)

if (k == t && t == u ){
console.log("numbers have same last 2 digits")
}

else{
    console.log("last digit of numbers are not same")
}