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


//------Number of Key in an Object Using Object.key()--------------

const student2 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};


// count the key/value
const result = Object.keys(student).length;


console.log(result);

//The Object.keys() method returns an array of a given object's own enumerable property names i.e. ["name", "age", "hobbies"].

