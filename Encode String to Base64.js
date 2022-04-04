//-----------------Encode a String to Base64 Using btoa()-----------------------

// defining the string
const str = "Apoorv"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);


// In the above example, the btoa() method is used to convert the string to Base64.

// The atob() method is used to convert the Base64 to a string.