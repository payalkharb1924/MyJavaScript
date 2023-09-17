// Immediately Invoked Function Expressions (IIFE)
// to avoid global scope pollution iife is used

(function chai(){
    console.log("DB CONNECTED");
})();
( () => {
    console.log("DB CONNECTED");
})(); // ; is used to terminate iife 

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("Payal");

