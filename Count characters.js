let str = "abccz"
countChar(str)

function countChar(str) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let newArr = Array.from(str)
    console.log(newArr)

    let charObj = {}

    let count = 1
    for (let j = 0; j < newArr.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if (newArr[j] === alphabet[i]) {
                charObj[newArr[j]] = 1;
               if(charObj.hasOwnProperty(newArr[j])){
                    charObj[newArr[j]] = 1;
                }
            }
        }
    }

    console.log(charObj)
}