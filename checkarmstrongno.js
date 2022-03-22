// an armstrong number is a number jiski digits ka sum krke vo number milta h for ex 153 = 1*1*1 + 5*5*5 + 3*3*3 (1 + 125 + 27)

// phle hum 153 se 1 1 digits obtain krenge fhir unka cube krke add krenge (like 1,3,5)

let num = 153;
let fact = 0;
let temp = num;

while (temp > 0) {
    console.log(temp)
    let remainder = temp % 10;               //153 %(finds remainder) 10 = remainder = 3
    console.log("remainder is :", remainder)

    fact += remainder * remainder * remainder;                // 3 * 3 * 3= 27
    console.log("updated fact value is :", fact)

    temp = parseInt(temp / 10);     // 153/10 = 15.3 ==>  converting to intger == 15
    console.log("value that will enter next loop is :", temp)
    //now 15 would enter in the loop 

    console.log("-----------------------------------------")

}

if (fact == num) {
    console.log(`${num} is an armstrong number`)
}

else {
    console.log(`${num} is not an armstrong number`)
}


// in this program we wil break down the number into single digits and then cube them and add it to fact

// -------------first loop--------------

// first 153 is divided by 10--- 153%10 ==> 3 (remainder)-- we need remainder and cube it
// the cubed value that is 27 is added to fact
//now 153 is competely divided with 10 ==> 153/10 ==> 15.3 ==> converted to intger ==> 15

// -------------second loop--------------


// now 15 enter the loop and 15 is divided by 10--- 15%10 ==> 5 (remainder)-- we need remainder and cube it
// the cubed value that is 125 is added to previous 27 in fact and will give ==> 152
//now 15 is competely divided with 10 ==> 15/10 ==> 1.5 ==> converted to intger ==> 1


// -------------third loop--------------


// now 15 enter the loop and 1 is divided by 10--- 1 % 10 ==> 1 (remainder)-- we need remainder and cube it
// the cubed value that of 1 is 1 is added to previous 152 in fact and will give ==> 153
//now 1 is competely divided with 10 ==> 1/10 ==> 0.1 ==> converted to intger ==> 0
//now if the fact is equal to number then number is arngstrom number




// ........................Find Armstrong Number in an Interval .........................//

let a = prompt("enter lower value of range:")
let b = prompt("enter higher value of range:")

for (i = a; i <= b; i++) {
    let temp = i;
    let numberOfDigits = i.toString().length;
    console.log(numberOfDigits)
    let sum = 0;

    while (temp > 0) {
        let remainder = i % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10)
    }
    if (sum == i) {
        console.log(`${num} is an armstrong number`)
    }
    
    else {
        console.log(`${num} is not an armstrong number`)
    }
    
}