// program to check if a key exists


// ----------------------METHOD 1------------------------------------

let obj = {
    name : "Apoorv",
    age : "21",
    sign : "cancer"
}

const keyHas = 'name' in obj;

if(keyHas){
    console.log("key exists")
}

else{
    console.log("key doesnt exist")
}

// in operator is used to check if a key exists in an object. The in operator returns true if the specified key is in the object, otherwise it returns false.


// ----------------------METHOD 2------------------------------------

const person = {
    id: 1,
    name: 'John',
    age: 23
}

let keyHas2 = person.hasOwnProperty('name');

if(keyHas2) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}

// hasOwnProperty() method is used to check if a key exists in an object. The hasOwnProperty() method returns true if the specified key is in the object, otherwise it returns false.
