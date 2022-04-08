//..........................Check Array Using includes()................

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if (hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}


//...................Check Array Using indexOf()............................

const array2 = ['you', 'will', 'learn', 'javascript'];
const hasValue2 = array.indexOf('javascript') !== -1; //The indexOf() method searches an array and returns the position of the first occurrence. If the value cannot be found, it returns -1.

// check the condition
if(hasValue2) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}
