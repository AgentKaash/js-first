

function SayMyName(){    
    console.log("K");
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
}

// SayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    //  Or
    return num1 + num2
}
const result = addTwoNumbers(3,5)
// console.log("Result: ", result );





function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kaash"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
return num1
}
// console.log(calculateCartPrice(200, 60 ,80, 400));

const user = {
    username:"kl",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and 
        price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue( [200, 400, 100, 600]));

