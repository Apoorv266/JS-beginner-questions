//.....................Using split() and pop().........................

function getFileExtension(item){
    const extension = item.split('.').pop()
}
// The last array element, which is the extension, is returned using the pop() method.
const result1 = getFileExtension('module.js');
console.log(result1);