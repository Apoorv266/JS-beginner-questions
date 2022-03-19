let a = parseFloat(prompt("enter number a"))
let b = parseFloat(prompt("enter number b"))
let c = prompt("enter operator (+ - / *)")


    if (c == "*") {
        let multi = a * b;
        console.log(multi)
    }

    else if (c == "+"){
        let sum = a + b;
        console.log(sum) 
    }

    else if (c == "-"){
        let min = a - b;
        console.log(min) 
    }

    else {
        let div = a / b;
        console.log(div) 
    }
