const number = 200
console.log(number)

const account = new Number(100)
console.log(account) // prints the number object

console.log(account.toString())
console.log(account.toString().length)
console.log(account.toFixed(2)) // formats the number to 2 decimal places

const balance = 123.56
console.log(balance.toPrecision(4)) // formats the number to 4 significant digits

const otherNumber = 1000000
console.log(otherNumber.toLocaleString()) 
console.log(otherNumber.toLocaleString("en-IN")) // formats the number according to Indian locale

// +++++++++++++++++++++MATHS+++++++++++++++++++++++

console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-45))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) 
console.log(Math.floor(4.8))
console.log(Math.min(4,3,5,1))
console.log(Math.max(4,3,5,6))


console.log(Math.random()) // generates a random number between 0 and 1
console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10) + 1)) // generates a random integer between 1 and 10

const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max-min+1)) + min )