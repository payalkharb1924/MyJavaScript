// Date is of datatype Object

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let date2 = new Date(2023,0,23)
// let date3 = new Date(2023,0,23,5,3)
// console.log(date2.toDateString());
// console.log(date3.toLocaleString());

// let date = new Date("2023-01-14") // YYYY-MM-DD
let date = new Date("01-14-2023")
// console.log(date.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp); // give time in milliseconds
// console.log(date.getTime()); // we can now compare these values in milliseconds

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let DATE = newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(DATE);




