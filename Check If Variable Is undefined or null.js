//............................using if else statement...........................

function checkVariable(params) {
    if (variable === undefined || variable === null) { 
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

checkVariable(5);
checkVariable(null);
checkVariable(newVariable);

//......................using typeof........................................

function checkVariable2(variable) {
if(typeof variable === null || typeof variable === 'undefined'){
    console.log('The variable is undefined or null');
}
else {
    console.log('The variable is neither undefined nor null');
 }
}

let newVariable;

checkVariable2(5);
checkVariable2('hello');
checkVariable2(null);
checkVariable2(newVariable);