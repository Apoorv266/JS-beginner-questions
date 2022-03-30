// write a JavaScript program that will create multiline strings

//-------------Create Multiline Strings Using +----------------------------------------

// using the + operator
const message = 'This is a long message\n' +
    'that spans across multiple lines\n' +
    'in the code.'

console.log(message);

// The escape character \n is used to break the line.


//-------------Create Multiline Strings Using \-----------------------------------------

// using the + operator
const message2 = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message2);

//------------Create Multiline Strings Using Template Literal---------------------------

const message3 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message3);
