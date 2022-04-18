//...................Extract Value Using map()......................
function extractValue(arr, prop) {
    let extractedValue = arr.map(item = (item) => item[prop]);

return extractedValue;
}


let objArray = [{a:1, b:2}, {a:1, b:2}, {a:1, b:2}]

const result = extractValue(objArray, 'a');
console.log(result);

//The map() method is used to iterate through all the elements of an array and extract property values of key a.


