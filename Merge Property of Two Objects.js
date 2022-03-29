//-----------Merge Property of Two Objects Using Object.assign()-----------------------

// object 1
const person = {
    name: 'Jack',
    age: 26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);
console.log(newObj)


//-----------Merge Property of Two Objects Using Spread Operator---------------

// object 1
const person2 = {
    name: 'Jack',
    age: 26
}

// object 2
const student2 = {
    gender: 'male'
}

// merge two objects
const newObj2 = { ...person, ...student };

console.log(newObj2);
