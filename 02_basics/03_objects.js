// *************************************************************

// Objects literals
const mySym = Symbol("key1") // to add symbol

const JsUser = {
    name: "Payal",
    "Full Name": "Payal Kharb",
    [mySym]: "myKey1",
    age: 18,
    email: "Payal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

// to change values
// JsUser.email = "kharb@gmail.com"

// To freeze chsnges in object
// Object.freeze(JsUser)
// JsUser.email = "kharb@google.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);  // this will reference to the function

JsUser.greetingTwo = function(){
    console.log(`Hello JS User  ${this.name}`);  // objects keys can be reffered using this.  inside string interpulation i.e ` `
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






