const num1 = prompt('Enter a positive number: ');
const num2 = prompt('Enter a positive number: ');

// for (i = 1; i <= 10; i++) {
//     var fact = num1 * i
//     console.log(fact)
// }

// for (i = 1; i <= 10; i++) {
//     var fact2 = num2 * i
//     console.log(fact2)
// }

// if (fact === fact2) {
//     console.log(`LCM is ${fact}`)
// }

let num3 = num1 * num2;

for (var i = 1; i <= num3; i++) {
    if (i % num1 == 0 && i % num2 == 0) {
        break
    }
}
console.log(i)