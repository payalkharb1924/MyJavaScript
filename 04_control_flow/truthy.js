const userEmail = "Payal.com"
// const userEmail = ""  // false by default
// const userEmail = []  // empty array is true by default

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// falsy value
// false,0,-0,BigInt (0n),"",null,undefined,NaN 

// truthy value
// "0",'false'," ",[],{},function(){},

// if (userEmail.length === 0) {
//      console.log("Array is empty");
// }

// const emptyobj = {}

// if (Object.keys(emptyobj).length == 0) {
//     console.log("Empty");
// }

// Nullish Coalescing OPerator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


// Ternary operator
// condition ? true : false
let val = 20
val>10 ? console.log("Greater") : console.log("Smaller");

