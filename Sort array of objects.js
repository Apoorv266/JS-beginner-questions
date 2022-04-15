//.........................Sort Array by Property Age.............................

// program to sort array by property name

function compareAge(a, b) {

    return a.age - b.age;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

console.log(students.sort(compareAge));