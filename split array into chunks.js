//............................Split Array Using splice()...............................


// program to split array into smaller chunks

function splitIntoChunk2(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk) 
        // 0 represents the index at which elements has to be removed which is 0 in this case and chunk represents how many elements has to be removed at index 0 so its 2 in our case

        // with each iteration 2 items are removed from index 0 and added to new array and the iteration will be carried out till the length of the array
        // 1st iteration = [1,2]
        // 2st iteration = [3,4]
        // 3st iteration = [5,6]
        // 4st iteration = [7,8]
       
        console.log(tempArray);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk2(array, chunk);


//......................Split Array Using slice().................................

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        // console.log(tempArray);
    }

}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk2 = 2;
splitIntoChunk(array2, chunk2);