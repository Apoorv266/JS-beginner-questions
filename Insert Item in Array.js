//--------------Add Item to Array Using splice()-----------------------------

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;

    array.splice(index, 0, element);
    console.log(array);

}

// In the splice() method,

// The first argument specifies the index where you want to insert an item.
// The second argument (here 0) specifies the number of items to remove.
// The third argument specifies the element that you want to add to an array.

//-----------------------Add Item to Array Using for Loop---------------------------------

// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    for (let i = array.length; i > index; i--) {

        //shift the elements that are greater than index
        array[i] = array[i-1];
    }

    // insert element at given index
    array[index] = element;

    console.log(array);
}

insertElement();

// The for loop is used to iterate through the array elements.
// The element is added to the given index.
// All the elements whose index is greater than the given index are shifted one step to the right.