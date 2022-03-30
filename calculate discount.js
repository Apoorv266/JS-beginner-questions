// Write javascript program based upon customer membership

let membership = prompt("enter your membership")
let value = 100;

if (membership === "silver"){
    FinalAmount = value * 10/100
    console.log(`final price is ₹ ${FinalAmount} `)
}

else if (membership === "gold"){
    FinalAmount = value * 50/100
    console.log(`final price is ₹ ${FinalAmount}`)
}