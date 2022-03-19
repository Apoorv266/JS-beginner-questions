// find hcf of two number

// hcf is a number that gets completely divisible with 2 numbers and should leave remainder 0 with both the numbers

const a = prompt('Enter a first positive integer: ');
const b = prompt('Enter a second positive integer: ');

let hcf;

for (i = 1; i <= b; i++) {
    // here we will check all the numbers from 1 to b if they are leaving remainder with a and b or not...the number that will leave remainder 0 a nd b is their hcf
    if (a % i == 0 && b % i == 0) {
        hcf = i;
    }
}

console.log(hcf)


