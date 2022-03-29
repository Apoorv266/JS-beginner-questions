//-------------Count the Number of Key in an Object Using for...in------------------

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for (let key in student) {
    // increase the count
    ++count;
}

console.log(count);
