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

function calculateCartPrice(...num1){
    return num1
} 
console.log(calculateCartPrice(100,200,300,400)) //  rest operator to collect all the arguments into an array

const user = {
    username: "shreshtha",
    price: 899
}

function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and the price is ${anyobject.price}`);

}
handleObject(user) 

const myNewarray = [1,2,3,4,5]

function givesecondvalue(anyarray){
    return anyarray[1]
}
console.log(givesecondvalue(myNewarray));
// console.log(givesecondvalue([20,30,40,50])) will also work because we are passing an array as an argument to the function and the function will return the second value of the array which is 30 in this case
