// Singelton
// Object.create  // this is constructor method

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.Id = "123@.com"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const User = {
    email: "123@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Payal",
            lastname: "Kharb"
        }
    }
}

// console.log(User.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)  // merge two objects
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: "123",
        email: "123@.com"
    },
    {
        id: "456",
        email: "456@.com"
    }

]

users[0].id

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.hasOwnProperty('age'));

// Destructurinf of Object
const course = {
    coursename: "JS course",
    fee: 999,
    teacher: "hitesh"
}

const {coursename: name} = course
// console.log(name);


// JSON => API
// it is declared using {}

// {
//     name: "payal",
//     coursename: "JS course",
//     price: "free"
// }


// [
//     {},
//     {},         // API can also be found in form of array
//     {}
// ]



 




















































