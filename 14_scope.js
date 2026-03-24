let a = 400
if(true){
    let a = 100
    console.log("Inner scope:", a) // 100 because of block scope
    }
console.log("Global scope:", a) // 400 because of global scope

function one(){
    const username = "shreshtha"

    function two(){
        const website = "www.shreshtha.com"
        console.log(username) // shreshtha because of closure
    }
 //console.log(website) // error because website is not defined in this scope
two()
}

one()

if(true){
    const username = "shreshtha"    
    if(username === "shreshtha"){
        const website = "www.shreshtha.com"
        console.log(username + " " + website)  // 
    }
    //console.log(website) // error because website is not defined in this scope

}
// console.log(username) // error because username is not defined in this scope

console.log(addone(5)) // runs successfully because of hoisting
function addone(num){
    return num + 1
}

addTwo(5) // error because addTwo is a function expression and it is not hoisted
const addTwo = function(num){
    return num + 2
}

