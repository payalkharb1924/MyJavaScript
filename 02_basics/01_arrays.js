// Arrays
// multiple datatype elements can exist in array and array is resizable 
// array has 0 base indexing

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Dr.Strange","Shang-Chi"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);

// Array methods

myArr.push(6,7)  //  .push() add elements to array
myArr.pop()  // remove last value of array
myArr.unshift(9) // add element in starting of array
myArr.shift() // remove element from starting of array
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // it will line array and convert to string

// console.log(newArr);
// console.log(typeof newArr);

// Slice and Splice

const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log(myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log(myArr);





