// for of

const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps // it contains no duplicate values , only unique values

const map = new Map()
map.set('In','India')
map.set('USA','America')
map.set('In','India')
// console.log(map);

// for (const key of map) {
//     console.log(key);      // show both keys and values
// }


for (const [key,value] /* destructuring */ of map) {
    // console.log(key,":-",value);
}

const obj = {
    game1: "NFS",
    game2: "Soccer",
    game3: "Basketball"
}
for (const [key,value] of obj) {
    console.log(key," : ",value);
}

// object is not iteratable using this method



































