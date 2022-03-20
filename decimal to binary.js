// program to convert decimal to binary

// binary number jo hot h jisko agar 2 se divide karo to saro aur jab tak vo 0 nhi ban jata aur uske remainders ka collection is binary

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log("rem is", rem)
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        console.log("bin is",bin)
        i = i * 10;
        console.log("i is",i)
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = prompt('Enter a decimal number: ');

convertToBinary(number);