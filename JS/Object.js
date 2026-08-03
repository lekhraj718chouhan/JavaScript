
// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Lekhraj",
    "full name": "Lekhraj Chouhan",
    [mySym]: "mykey1",
    age: 21,
    location: "Indore",
    email: "Lekhraj@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

 JsUser.email = "Lekhraj@chatgpt.com"
//  Object.freeze(JsUser)
 JsUser.email = "Lekhraj@microsoft.com"
 console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


