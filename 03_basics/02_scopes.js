let a = 100
if (true){
    let a = 10  // scope of this a is within this if condition
    const b = 20
    // var c = 30
    // console.log("inner a is : ",a);
}
// a and b are within the scope so they will not be printed but c will be printed
// console.log(a); 
// console.log(b);
// console.log(c);

function one(){
    const username = "Payal"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);  // not in scope
    two()
}
one()


if(true){
    const username = "Payal"
    if(true){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

addtwo()
const addtwo = function(num){
    return num + 2
}