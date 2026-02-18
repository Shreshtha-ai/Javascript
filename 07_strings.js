const name = "Shreshtha"
const repo = 10
console.log(name +  repo + " Value") 

console.log(`My name is ${name} and I have ${repo} repositories`) // string interpolation using backticks

const gamename = new String("Valorant") // creating a string using the String constructor
console.log(gamename) // prints the string object
console.log(gamename[0])
console.log(gamename.__proto__) // shows the prototype of the string object
console.log(gamename.length) // length property 
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf("a"))

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-6,4)
console.log(anotherString)

const newStringone = "   Shreshtha YT    "
console.log(newStringone)
console.log(newStringone.trim());

const url = "https://shreshtha.com/shreshtha%20yt"
console.log(url.replace("%20","-")) 
console.log(url.includes("shreshtha")) 

console.log(url.split("/"))




