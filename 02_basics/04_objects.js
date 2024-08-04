// const tinderUser = new Object() //--> singke turn obj


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
        id:1,
        email:"k@gmail.com"
    },
    {
           id:1,
        email:"k@gmail.com"
    },
    {
           id:1,
        email:"k@gmail.com"
    }
]

// console.log(users[1].email);



const tinderUser = {} // -->non single

tinderUser.id="123ab"
tinderUser.name= "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));



const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor: CI} = course

console.log(CI);

