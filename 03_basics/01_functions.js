function sayName() {
    console.log("P");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("l");
}

// sayName()

// function add(num1,num2) {
//     console.log(num1+num2);
// }
function add(num1,num2) {
    return num1 + num2
}

// add(3,4)
// add(3,"4")
// add(3,"a")
const result = add(3,4)
// console.log("Result : ",result);


function logInMessage(username/*or username = "anyname"*/) {
    // if(username === undefined){
    //     console.log("Please enter username");
    //     return
    // }
    //  ! means opposite value i.e ! converts true into false and vice versa
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInMessage("Payal"))
// console.log(logInMessage())


// ********************************************************************************

//  Rest operator(...)  

function calculateCartPrice(val1,val2,...num){
    return num
}

// console.log(calculateCartPrice(200,300,400,500,600,700));


const user = {
    username: "payal",
    price: 999
}
function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 199
// })


const myArray = [1,2,3,4,5,6,7]

function secondElement(getArray){
    return getArray[1]
}

// console.log(secondElement(myArray));

console.log(secondElement([1,2,3,4,5,6,7]));






