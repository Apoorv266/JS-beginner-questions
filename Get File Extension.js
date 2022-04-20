//.....................Using split() and pop().........................

function getFileExtension(item){
    const extension = item.split('.').pop()
}
// The last array element, which is the extension, is returned using the pop() method.
const result1 = getFileExtension('module.js');
console.log(result1);


//.......................Using substring() and lastIndexOf().........................


// program to get the file extension

function getFileExtension2(filename){
    // get file extension
    const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);

    //filename.lastIndexOf('.') + 1 ===> 8 (index of '.' starting from 0 is 7 + 1)
    // filename.length ====> 10

    //filename.lastIndexOf('.') + 1 returns the last position of . in the filename.
// 1 is added because the position count starts from 0.

// substring(filename.lastIndexOf('.') + 1, filename.length) method returns characters between the given indexes. For example, 'module.js'.substring(8, 10) returns js.

    return extension;
}

const result3 = getFileExtension2('module.js');
console.log(result3);

const result4 = getFileExtension2('test.txt');
console.log(result4);