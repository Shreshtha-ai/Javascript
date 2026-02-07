"use strict"

// alert(3+3)  //alert() does not exist in Node.js because Node runs outside the browser

console.log("Hello, World!")

let name = "Shreshtha"
let age = 18
let isLoggedIn = false
let state = null
let city; // undefined



// number => 2 to the power of 53
// bigint => more than 2 to the power of 53
// string = ""
// boolean => true or false
// null => standalone value that represents nothing
// undefined => variable that is not assigned a value yet
// symbol => unique identifier

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof state) // object (this is a known issue in JavaScript, null is considered an object)
console.log(typeof city) // undefined