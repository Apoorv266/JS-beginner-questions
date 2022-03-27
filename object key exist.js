// program to check if a key exists

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