//..........................Check Array Using includes()................

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if (hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}
