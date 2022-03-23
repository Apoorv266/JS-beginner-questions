let str = "this is string"
console.log(str[str.length - 1])

let temp = "";
for (let i = str.length - 1; i >= 0; i--){
temp = temp + str[i]
}
console.log(temp)
