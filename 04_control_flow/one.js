// if

// <,>,<=,>=,==,(=== and !== (for typechecking))

const temp = 41
// if (temp<50){
//     console.log("less");
// }
// console.log("more");
// if (temp<50){
//     console.log("less");
// } else {

//     console.log("more");
// }

// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`power is to ${power}`);
// }
// console.log(`power is to ${power}`);

const isLoggedIn = true
const debitcard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if (isLoggedIn && debitcard && 2==3) {
    console.log("Allowed");
}

if (isLoggedInFromGoogle || isLoggedInFromEmail) {
    console.log("Logged in");
}

