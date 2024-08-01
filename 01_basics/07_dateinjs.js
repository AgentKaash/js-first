//Dates ---->object

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreateDate = new Date(2024, 6, 31)
// let myCreateDate = new Date(2024, 6, 31, 23, 18)
let myCreateDate = new Date("2024-7-31")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log()

newDate.toLocaleString('deafult', {
    weekday:"narrow",
})

console.log( new Date());