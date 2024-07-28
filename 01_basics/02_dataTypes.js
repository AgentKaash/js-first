"use strict";//treat all js code as newer version

//alert(3+3) //we are using nodejs, not browser

console.log(3
    +3);
console.log("lao");
//code readablity should be high

let name = "kl"
let age =18
let isLoggedIn = false
let state;

//number => 2 to power 53
//bigint
//string =>""
//boolean =>true/false
//null  =>standalone value
//undefined =>
//symbol 

//object

// console.log(typeof null);//olllbject

//Primitive

// 7 types : string ,number , boolean ,null ,undefined ,symbol , bigint

const score5 =100
const scprevalue = 100.3

const isloggedIn =false
const outsideTemp =null // type of outsideTemp -> object
let useEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber = 24358813518795n // type of bigNumber -> undefined


//reference (non primitive)

//array, objects, functions

const heros = ["thor", "ironman","hulk"]; //type of heros(function) -> object function

// let myObj ={
//     name:kaash,
//     age:22,
// }

const myFunction = function(){ // type of myFunction --> object
    console.log("hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap (Non-primitive)

let myYoutubename= "Kaashalaicom"
let anothername = myYoutubename
 anothername = "chaiaurcode"
 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne 
 userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);