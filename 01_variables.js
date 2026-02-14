const accountId = "123456"
let accountEmail = "shreshtha@google.com"
var accountPassword = "43354"
accountcity = "Jaipur"

// accountId = "234" not allowed because it is a constant variable and cant be changed 
accountEmail = "sag@outlook.com" 
accountPassword = "54321"
accountcity = "Delhi"
let accountState;
console.log(accountId) // undefined because it is not declared 

/*
not use var because of issue in block scope and  function scope
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])
