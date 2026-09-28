const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

const chai = {
    name: 'ginger chai',
    price: 20,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani")
    }
}


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}