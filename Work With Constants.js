// program to include constants

const a = 5;
console.log(a);                                 //    5

// constants are block-scoped
{
    const a = 50;
    console.log(a);                             //    50
}
console.log(a);                                 //    5

const arr = ['work', 'exercise', 'eat'];
console.log(arr);                               //    ["work", "exercise", "eat"]
 
// add elements to arr array
arr[3] = 'hello';
console.log(arr);                              //   ["work", "exercise", "eat", "hello"]

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x; 


//Constants are block-scoped. Hence the variable defined inside a block represents a different value than the one outside. For example,