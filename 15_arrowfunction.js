const user = {
    username: "shreshtha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${user.username} just logged in`); //
        console.log(`${this.username} just logged in`); // this refers to the current object
        console.log(this) // this refers to the current object
}
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() // this will reflect the updated username because this refers to the current object
console.log(this) // this refers to the global object in this context which is the window object in the browser and global object in node.js

function hello(){
    let username = "shreshtha"
    console.log(this.username) // undefined because this refers to the global object and username is not defined in the global scope
    console.log(this)
}
hello() 

const bye = () => {
    let username = "shreshtha"
    console.log(this.username) // undefined because this refers to the global object and username is not defined in the global scope
    console.log(this) 
}
bye()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5))

const addTwo = (num1, num2) => (num1 + num2) // implicit return
console.log(addTwo(3,5))