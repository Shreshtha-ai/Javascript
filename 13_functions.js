function sayMyname(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("T");
    console.log("H");
    console.log("A");

    
}
//sayMyname() // calling the function to execute the code inside it

// function addTwonumbers(number1, number2){
//     console.log(number1+ number2);
// }
// addTwonumbers(3,7)
// addTwonumbers(3,"5")

function addTwonumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 
}
const result = addTwonumbers(3,5)
console.log("Result:", result)

function loginUserMessage(username){
    if(username === undefined){ // or !username 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Shreshtha"))
console.log(loginUserMessage()) // underfined 
