//.....................Using split() and pop().........................

function getFileExtension(item){
    const extension = item.split('.').pop()
}

const result1 = getFileExtension('module.js');
console.log(result1);