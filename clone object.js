// write a program that clones an object.

const person = {
    name: 'John',
    age: 21,
}

const copy = person;
console.log(copy); // {name: "John", age: 21}

// the copy variable has the same value as the person object.


//------------------Clone the Object Using Object.assign()-------------------------------

// we use  Object.assign() when we want to clone an object and make it an indipendent object which means we can change the properties of the cloned object but those changed properties wont change in original object

// declaring object
const person2 = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = Object.assign({}, person);  //The empty {} as the first argument ensures that you don't change the original object.

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);  // Peter
console.log(person.name);       //John


// Object.assign() method performs deep copy and copies all the properties from one or more objects.

