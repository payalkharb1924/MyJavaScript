const marvel_heros = ["Thor","Ironman","Dr.Strange"]
const dc_heros = ["Flash","Superman","Batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Spread Method

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// in situations where array contains sub arrays

const Arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_Arr = Arr.flat(Infinity) // Give depth of array in place of infinity if depth is known
// console.log(real_Arr);

// console.log(Array.isArray("Payal"))  // it will check wghether the following is an array
// console.log(Array.from("Payal"))  // it will create array
// console.log(Array.from({name: "Payal"}))  // it will create empty array bcoz it doesn't know whether to convert key as array or there values as array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



