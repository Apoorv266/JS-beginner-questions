// 1. Write a JavaScript program that accept two integers and display the larger.


let num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

if (num1 > num2) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else if (num2 > num1) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
}
else {
    // console.log("The values " + num1 + " and " + num2 + " are equal.");
}


let number1 = 100;
let number2 = 2;

if (number1 > number2) {
    // console.log("Larger one is " + number1)
}

else {
    // console.log(number2 + " is large");
}


//   Program to Find the Square

let num3, num6;

// num3 = window.prompt("enter the number to find square root", "0");

num6 = (num3 * num3);

// console.log(num4);

//    Program to Find the Square root

let num5, num4;

// num3 = window.prompt("enter the number to find square root", "0");

num4 = (num5 ** 0.5);

// console.log(num4);


//   program to find area of triangle

// let a, b, c;

// a =  window.prompt("enter the height", "must be positive");
// b =  window.prompt("enter the base", "must be positive");

// console.log(0.5 * a * b);

// program to swap a variable

//JavaScript program to swap two variables

//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp2;

//swap variables
// temp2 = a;
// a = b;
// b = temp2;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// Program to convert km to miles

// let a, b;

// a = window.prompt("enter Kms", "positive");
// b = (a * 0.621371);

// console.log(b + " miles");

// Javascript Program to Convert Celsius to Fahrenheit

// let a, b;

// a = window.prompt("enter celcius", "positive");

// b = ((a * 1.8) + 32);

// console.log(b);


// Javascript Program to Check if a number is Positive, Negative, or Zero

// let a, b;

// a = window.prompt("enter number", " ");

// if (a > 0){
// console.log("a is positive");
// }

// else if (a < 0){
// console.log("a is negative");
// }

// else{
// console.log("a is 0");
// }

// Javascript Program to Check if a Number is Odd or Even


// let a;

// a = window.prompt("enter number", " ");

// if (a>0){
//     console.log("a is positive");
// }

//  else{
//     console.log("a is negative");
//     }

// JavaScript Program to Find the Largest Among Three Numbers

// let a,b,c;

// a = prompt("enter number", " ");
// b = window.prompt("enter number", " ");
// c = window.prompt("enter number", " ");

// check if string is palindrome

let str = "Apoorv"
// console.log(str[i])

// let str3 = "racecar";
// let str4 = "";

// for (i = str3.length;i >0; i--){
//     str4 += str3[i];
//     return str4;
// }

// console.log(str4);


// JavaScript Program to Swap Two Variables 

//JavaScript program to swap two variables

//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

//create a temporary variable
// let = hello;
// hello = a;
// a = b;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// Program to Solve Quadratic Equation

// quatratic quation is of the form ax2+2b+c

// let a = prompt('let value of a: ');
// let b = prompt('let value of b: ');
// let c = prompt('let value of c: ');

// let que = b * b - 4 * a * c;

// console.log(que)

// let root1
// let root2

// if (que < 0) {
//     root1 = -b + Math.sqrt(que) / 2 * a
//     root2 = -b - Math.sqrt(que) / 2 * a
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else if (que == 0) {
//     root1 = -b / 2 * a;
//     root2 = -b / 2 * a;
// }

// else {
//     let part1 = (-b / (2 * a)).toFixed(2);
//     let part2 = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log(
//         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
// }

// Program to Check Prime Number

// we have set to make 3 conditions one when no is == 0 other when no is no < 1 third when no > 1
// all prime numbers are positive

// const a = parseInt(prompt("Enter a positive number: "));
// // we have first taken input from user as passed it as integer
// let isPrime = true
// // here we have assign a boolean value to isPrime and set it as true

// if (a === 1) {
//     // first we check if the number is 1 or not..as 1 is neither prime nor composite number.
//     console.log("1 is neither prime nor composite number.")
// }

// // below else condition is used to check if the number is positive or not
// else if (a > 1) {
//     for (let i = 2; i < a; i++) {
//         // since we have already checked for 1 we will start this loop from 2

//         // in this loop we will decide a number with all its previous numbers..if it gets 0 with any of the number less than it than its not a prime number...for example if the user puts the number 6 then 6 ko check kiya jaega ki vo uske chote positive numbers se divisible h ki nhi like (2,3,4,5)...till 5 isliye bcz condition me i < a h...ab 6 , 2 se divisble hoke 0 dera h to mtlb vo prime nhi h...prime number ko bas apne app se 0 dena hota h

//         if (a % i == 0) {
//             isPrime = false;
//             // agar number apne phle kisi number se divide hoke 0 dera h to boolean jo isPrime me stored h vo false ho jaega
//             break
//         }

//     }

//     if (isPrime) {
//         // agar boolean isPrime true hi raha to number prime h aur iska phle ye h ki vo apne se phle kisi bhi number se divide nhi hua
//         console.log(`${a} is a prime number`);
//     } else {
//         // agar boolean isPrime false hota h to number prime nhi h aur vo apne phle anne wale kisi positive number se divide hoke 0 de diya h to vo prime nhi h
//         console.log(`${a} is a not prime number`);
//     }
// }

// else {
//     // this else condition is if a is negative or not
//     console.log("a is negative")
// }

// Print All Prime Numbers in an Interval

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     // this loop will check that the number is divisible by its smaller numbers or not
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

// Find the Factorial of a Number

// let num = 5;

// if (num < 0){
//     console.log("negave number doenst have factorial")
// }

// else if (num === 1){
// console.log("factorial is 1")
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`factorial of number is ${fact}`)
// }

// Find multiplication table

// let num7 = parseInt(prompt('Enter number: '));

// for (i = 1; i <= 10; i++) {
//     let fact;
//     fact = num7 * i;
//     console.log(fact)
// }


// Print the Fibonacci Sequence

// program to generate fibonacci series up to n terms

// // take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let x = 0;
// let y = 1; 
// let fn = x + y;

// console.log(x);

// while (fn < number) {
//     console.log(fn);
//     // giving value of y to x 
//     x = y;
//     // giving previous value of fn to y
//     y = fn;
//     // creating new x and y pair
//     fn = x + y;
// }


