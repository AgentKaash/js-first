// singleton --> made by constractor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Kaash",
    "full name":"Kaash Lai",
    [mySym] : "mykey1",
    location:"kolkata",
    email:"kaash@gmail.com",
    inLogingIn: false
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "AgentKAsh@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kaashagent@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


