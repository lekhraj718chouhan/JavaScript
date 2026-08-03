const chai = function () {
    let username = "lekhraj"
    console.log(this);
}

const chai1 = () => {
   let username = "lekhraj"
    console.log(this.username);
}

// chai()
chai1()

const addTwo = (num1, num2) => num1 + num2
const addTwo1 = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4))
console.log(addTwo1(13,5))