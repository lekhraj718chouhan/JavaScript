const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Mobile devp course",
        price: 3999
    },
    {
        itemName: "cpp course",
        price: 4999
    },
]

// const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

const priceToPay = shoppingCart.reduce( (acc, item) =>{ 
    console.log(`acc: ${item.itemName} and price: ${item.price}`);
    return acc + item.price }, 0)

console.log(priceToPay)