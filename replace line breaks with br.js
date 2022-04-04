//------------Replace All Line Breaks Using Built-in Methods---------

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

// The split('\n') splits the string into array elements by splitting on a line break.
const result = string.split('\n'); //["I am Learning JavaScript.", "JavaScript is fun.", "JavaScript is easy."]

// The join('<br>') method joins the array by adding <br> between array elements.
let result2 = result.join('<br>'); //I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

console.log(result2);