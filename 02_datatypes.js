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

const bigNumber = 12428902303412n // the 'n' at the end indicates that this is a BigInt

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid) // false because each Symbol is unique even if they have the same description

// non primitive dataypes -> arrays , objects , functions

// arrays 

const heros = ["spiderman","batman"]
let myobj = {
    name : "Shreshtha",
    age : 18,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber) 