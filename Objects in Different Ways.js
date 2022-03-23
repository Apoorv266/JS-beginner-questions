//----------------Using object literal------------------------------------

let obj = {
  name: "Apoorv",
  age: 10,
  college: {
    class: "Bsc",
    Id: "19CZBT37056",
  },
  hobbies : ["time waste", "sleep", "Make maggie"],
  greet : function(){
      console.log("going great")
  }
}

console.log(obj)   //access obj
console.log(obj.name)  //access value of key
console.log(obj.college.Id)  //access value of key in object
console.log(obj.hobbies[1]) //access array elements in object
obj.greet()  //access function in object

console.log("-----------------------------------")
// Create an Object using Instance of Object Directly

let obj2 = new Object ({
    name: "Apoorv",
    age: 10,
    college: {
      class: "Bsc",
      Id: "19CZBT37056",
    },
    hobbies : ["time waste", "sleep", "Make maggie"],
    greet : function(){
        console.log("going great")
    }
  });

  console.log(obj2)   //access obj
console.log(obj2.name)  //access value of key
console.log(obj2.college.Id)  //access value of key in object
console.log(obj2.hobbies[1]) //access array elements in object
obj2.greet()  //access function in object

console.log("-----------------------------------")
//----------Create an object using Constructor Function---------------------------------

function obj3(){
    this.name = "Apoorv",
    this.age = 10,
    this.college = {
        class: "Bsc",
        Id: "19CZBT37056",
      },
      this.hobbies = ["time waste", "sleep", "Make maggie"],
      this.greet = function(){
        console.log("going great")
    }
}

let obj4 = new obj3();

console.log(obj4)   //access obj
console.log(obj4.name)  //access value of key
console.log(obj4.college.Id)  //access value of key in object
console.log(obj4.hobbies[1]) //access array elements in object
obj4.greet()  //access function in object