// If you want to find a random integer in between min (inclusive) to max (inclusive), you can use the following formula:

// Math.floor(Math.random() * (max - min + 1)) + min



//...........................Integer Value Between Two Numbers...........................

const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

const a = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random value between ${min} and ${max} is ${a}`);