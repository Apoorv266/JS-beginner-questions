// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   // (Math.floor(Math.random() * charactersLength) generates a random number and give it to characters.charAt which inturn find string character corresponding to that number in "characters" variable

    return result;
}

console.log(generateString(20)); //invoking function


//---------------Generate Random Strings Using Built-in Methods--------------------

const result = Math.random().toString(36).substring(2,7);
console.log(result);