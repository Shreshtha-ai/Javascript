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