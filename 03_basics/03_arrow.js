const user = {
    username: "Payal",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); //this will show current context 
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // this is empty bcoz it is in node environment

// function chai(){
//     username: "Payal"
//     console.log(this.username);  // this can't be directly used in functions it is used in objects
// }
// chai()

// const chai = function(){
//     username: "Payal"    
//     console.log(this.username);
// }
// chai()

// Arrow Function
// const chai = () => {
    // username: "Payal"
    // console.log(this.username);
// }
// chai()

// Basic Arrow fcn

// const add = (num1,num2) => {
//     return num1 + num2
// }
//         or
// const add = (num1,num2) => num1 + num2
//         or
const add = (num1,num2) => (num1 + num2)

console.log(add(3,4));
