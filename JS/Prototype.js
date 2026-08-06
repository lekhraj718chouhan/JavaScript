let myName = "lekhraj    "

console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.lekhraj = function(){
    console.log(`lekhraj is present in all objects`);
}
Array.prototype.heylekhraj = function(){
    console.log(`Lekhraj says hello`);
}

// heroPower.lekhraj()
// myHeros.lekhraj()
// myHeros.heylekhraj()
// heroPower.heylekhraj()


// inheritance

const User = {
    name: "chai",
    email: "chai@googlegmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"lekhraj".trueLength()
"shree".trueLength()