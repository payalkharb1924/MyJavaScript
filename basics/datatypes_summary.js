// Types of datatypes -> Primitive and Non Primitive

// (i) Primitives (Call by value)
//  7 types => String,Number,Boolean,null(datatype of null is Object),undefined(datatype=undefinrd),Symbol(to make values unique),BigInt
// Float,int both falls in category of Numbers
// eg. 
// const score = 100
// const scoreValue = 100.3

// const Id = Symbol('123')
// const AnotherId = Symbol('123')
// whether both seem to have same value but they actually are unique
// console.log(Id==AnotherId);

// const BigNumber = 2754328526598236526589n


// (ii) Non-Primitive(Reference)

// Array,Objects,Functions

// Arrays :
// const heros = ["Dr.Strange","Shang-Chi","Ironman"];

// Objects :
// let MyObj = {
//     name: "Payal",
//     age:18
// }

// Function : (datatype of function is Function)
// const MyFunction = function(){
//     console.log("Hello World");
// }



// *******************************************************

//  MEMORY
// Type of Memory -> Stack(Primitive),Heap(Non-Primitive)

// Stack : This don't change the exact value it generate copy of value and apply changes on it

let Name = "Payal"
let Name2 = Name
Name2 = "Kharb"

console.log(Name);
console.log(Name2);

// Heap -> Original values changes in heap

let userOne = {
    email: "user@gmail.com",
    upi:"user@123"
}

let userTwo = userOne
// Here userTwo will directly access data of userOne instead of copy

userTwo.email = "123@gmail.com"

console.log(userOne);
console.log(userTwo);



