// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 9, 15)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("01-15-2026")
console.log(myCreatedDate1.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));