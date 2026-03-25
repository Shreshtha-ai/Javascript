// if 

// if(condition) {
// }

if (2 == "2"){ // checks only the value and not the type
    console.log("Condition is true");
}

if ( 2 === "2"){ // checks the value and the type
    console.log("Condition 2 is true");
}

const temperature = 30
if(temperature > 25){
    console.log("It's a hot day");
}
else {
    console.log("It's a cold day");
}

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`user power is ${power}`);
}
// console.log(`user power is ${power}`) // error because power is not defined in this scope

const balance = 1000
if (balance > 500) console.log("test") , console.log("test2") // this will run because of the comma operator which allows us to write multiple statements in a single line but it is not recommended to use it because it can make the code less readable
// the above code is not condiered good because it is not readable

if(balance < 500){
    console.log("balance less than 500");
}
else if(balance < 1000){
    console.log("balance less than 1000");
}
else if(balance < 1500){
    console.log("balance less than 1500");
}
else {
    console.log("balance is greater than or equal to 1500");
}

const userLoggedIn = true
const debitcard = true
const Loggedinfromgoogle = false
const Loggedinfromgmail = true

if(userLoggedIn && debitcard){ // logical AND operator
    console.log("You can make a purchase");
}

if( Loggedinfromgoogle || Loggedinfromgmail){ // logical OR operator
    console.log("You can login");
}
