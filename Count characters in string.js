let str = "hellloo"
countChar(str)

function countChar(str) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let newArr = str.split("")
    console.log(newArr)

    let charObj = {}

    for (let j = 0; j < newArr.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if (newArr[j] === alphabet[i]) {
               if(charObj.hasOwnProperty(newArr[j])){
                    charObj[newArr[j]] = charObj[newArr[j]] + 1;
                }
            
                else{
                    console.log(newArr[j])
                    charObj[newArr[j]] = 1;
                }
            }
        }
    }
    console.log(charObj)
}


console.log("..................making code short.................")


let str2 = "hhhelllo"
countChar(str2)

function countChar(str) {
    let charObj = {}
    for (let char of str) {
            if (/[a-z0-9]/.test(char)) {
                (charObj.hasOwnProperty(char)) ? charObj[char] = charObj[char] + 1 :  charObj[char] = 1;
            }
    }
    console.log(charObj)
}