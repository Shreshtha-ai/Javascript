let score = 33

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

let scoreinstring= "33"

let valueInNumber2 = Number(scoreinstring)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)

let isLoggedIn = false
let loggedInNumber = Number(isLoggedIn)
console.log(typeof(loggedInNumber))
console.log(loggedInNumber) 

let scoreinString = "33abc"
let valueInNumber3 = Number(scoreinString)
console.log(typeof(valueInNumber3))
console.log(valueInNumber3) // NaN => Not a Number


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let LoggedIn = 2
let booleanLoggedIn = Boolean(LoggedIn)
console.log(typeof(booleanLoggedIn))
console.log(booleanLoggedIn) 

// 0 => false
// 1 => true
// 2 => true
// "" => false
// " " => true
// "false" => true
// null => false
// undefined => false

let somennuber = 33
let stringnumber = String(somennuber)
console.log(typeof(stringnumber))
console.log(stringnumber)
