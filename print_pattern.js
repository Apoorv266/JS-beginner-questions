// Write a program to print this pattern:
// 100000
// 10000
// 1000
// 100
// 10
// 1
// 10
// 100
// 1000
// 10000
// 100000

let num = 100000;

let temp = num;
// we have stored num in temp because we need an updated value which is 1 which is the beginning point of 2nd loop

// 100000
// 10000
// 1000
// 100
// 10
// 1

// while (temp > 0) {
//   temp = parseInt(temp / 10);
//   console.log(temp)

//   if (temp === 1) {
//     break
//   }
// }


// a while loop as well as a for loop can be used----we would ignore the increment because incriment would increase the temp by 1..so evertime temp would again enter the loop 1 will be added for example 11,101, 1001,100001 instead we want 10, 100, 1000, 1000..

// in for loop we would also not assign the value to i because we can directly use temp

// for loop instead of while loop

console.log(num)
for (; temp > 0;) {
  temp = temp / 10;
  console.log(temp)
  
  if (temp === 1) {
    break
  }
  }
  
// we would divide temp with 10 and update the temp value that is obtained by dividing it by 10...the loop will take temp value divide by 10 as it passes the loop like 10000,1000,100,10,1

// since we just need final condition we can use while loop(shown above) instead of for loop

// when temp becomes equal to 1 we break the loop


// 1
// 10
// 100
// 1000
// 10000
// 100000

// temp now is = 1
for (let i = temp; i < num;) {
  i = i * 10;

  // we would multiply i with 10 and update the i value that is obtained by multiplying it by 10...the loop will take i value mupltiplied by 10 as it passes the loop like 1,10,100,1000,100000
  
  console.log(i)
}

console.log("-----------------------------")
