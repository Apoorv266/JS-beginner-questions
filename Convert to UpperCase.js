let str = "javacript"
capitalize(str)
function capitalize(str){
    const capitalize = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(capitalize)
}

// str.charAt(0) => j
// str.charAt(0).toUpperCase() => J
// str.slice(1) => avaScript
// Two values are concatenated using the + operator.