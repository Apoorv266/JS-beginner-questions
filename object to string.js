//-----------------Object to String Using JSON.stringify()---------------

const person = {
    name: 'Jack',
    age: 27
}

const result = JSON.stringify(person);

console.log(result);

//-------------Convert Object to String Using String()--------------------

// program to convert an object to a string

const person2 = {
    name: 'Jack',
    age: 27
}

const result1 = String(person2);
const result2 = String(person2['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);

// When using the String() function on an Object, the converted result will give [object Object].