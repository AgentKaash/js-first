// const tinderUser = new Object() //--> singke turn obj
// const tinderUser = {} // -->non single

// tinderUser.id="123ab"
// tinderUser.name= "sam"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname: "kaash",
            lastname:"lai"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);



const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);



const users = [
    {
        
    }
]