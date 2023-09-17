const accountId = 12345
let accountEmail = "payal@gmail.com"
/* let is used in place of var bcoz of issue in block scope and functional scope */
var accountPassword = "54321"
accountCity = "Panipat" // don't use this more
let accountState;

// accountId = 2    // This is constant and can't be changed
accountEmail = "pk@gmail.com"
accountPassword = "1234"
accountCity = "Sonipat"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])