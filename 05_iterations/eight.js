const nums = [1,2,3]

// const myTotal = nums.reduce(function (accum,currval) {
//     console.log(`accum : ${accum} and currval : ${currval}`);
//     return accum + currval
// },0)

// const myTotal = nums.reduce( (accum,currval) => accum + currval,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999
    },
    {
        itemName: "DS course",
        price: 4999
    }
]

const Total = shoppingCart.reduce( (acc,item) => acc + item.price ,0)
console.log(Total);