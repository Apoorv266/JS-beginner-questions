


function checkAna(str1, str2) {
    let arr1 = Array.from(str1).sort()
    let arr2 = (Array.from(str2).sort())


    for (const key of arr1) {
        for (const key2 of arr2) {
            if (key === key2) {
                console.log(true)
            }

        }
    }
}






function validAnagrajm(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {}  // create empty object to store values 

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        if (lookup[letter]) {
            lookup[letter] += 1
        }
        else{
            lookup[letter] = 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if(!lookup[letter]){
        return false
      }  
      else{
        lookup[letter] -= 1
      }
    }
    console.log(lookup)
}

let str1 = "anagram"
let str2 = "nagaram"

validAnagrajm(str1, str2)
// checkAna(str1, str2)

