// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLogedIn = false



const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);

const users = [
    {
        id: 1,
        email: "LC@gmail.com"
    },
    {
        id: 2,
        email: "SC@gmail.com"
    },
    {
        id: 3,
        email: "CC@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(Object.hasOwnProperty('isLogedIn'));