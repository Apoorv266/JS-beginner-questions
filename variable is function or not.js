
//................................using typeof.....................................

function testVariable(variable) {
if(typeof variable === "function"){
console.log("variable is a function")
}
else{
    console.log("variable is not a function")
}
}

const x = function() {
    console.log('hello')
};

testVariable(x);

// typeof operator is used with strict equal to === operator to check the type of variable.
// The typeof operator gives the variable data type. === checks if the variable is equal in terms of value as well as the data type.

//................................using instanceof.....................................

function testVariable2(variable) {
    if(variable instanceof Function){
    console.log("variable is a function")
    }
    else{
        console.log("variable is not a function")
    }
    }
    
    const x2 = function() {
        console.log('hello')
    };
    
    testVariable2(x);

    // In the above program, the instanceof operator is used to check the type of variable.

