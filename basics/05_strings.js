let name = "Payal"
let age = 18
// console.log(name + age + " year old");
//console.log(`Hello my name is ${name} and my age is ${age}`);

const game = new String('Payal-Kharb')
//console.log(game[0]);
//console.log(game.__proto__); // values in this empty object can be seen using Chrome -> inspect -> console
//

// console.log(game.length);
// console.log(game.toUpperCase());
// console.log(game.charAt(2));
// console.log(game.indexOf('l'));
const newgame = game.substring(0,5)
// console.log(newgame);
// Can give -ve value in slice()
const anothergame = game.slice(-8,4)
// console.log(anothergame);

const newStr = "  Payal  "
// console.log(newStr);
// console.log(newStr.trim());

const url = "https://payal.com/payal%20kharb"
// console.log(url.replace('%20','-'))
// console.log(url.includes('payal'))
// console.log(url.includes('nonu'))


const myName = new String('Payal-Kharb-and-nonu-kharb')
// console.log(myName.split('-'));

// console.log(myName.fontcolor('red'));








