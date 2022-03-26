// program to check if a string starts with 'S' and ends with 'G'\

let str = "ShegewG";

func(str)
function func (str){
if (str.startsWith('S') && str.endsWith('G')) {
    console.log("string start with S and ends with G")
}
else if (str.startsWith('S')) {
    console.log('The string starts with S but does not end with G');
}
else if (str.endsWith('G')) {
    console.log('The string starts does not with S but end with G');
}
else {
    console.log('The string does not start with S and does not end with G');
}
} 

// The startsWith() method checks if the string starts with the particular string.
// The endsWith() method checks if the string ends with the particular string.
