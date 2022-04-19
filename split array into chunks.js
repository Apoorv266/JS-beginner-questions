//............................Split Array Using splice()...............................


function splitIntoChunk(arr, chunk) {
while (arr.length > 0) {
    tempArray = arr.splice(0, chunk);
    console.log(tempArray); 
}
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);


//......................Split Array Using slice().................................

