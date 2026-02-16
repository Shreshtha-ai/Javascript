// Stack(Non primitive data types) and Heap(Primitive data types) are two different memory areas in JavaScript.

let myYoutubename = "Shreshtha"

let anothername = myYoutubename
anothername = "Shreshtha YT"

console.log(myYoutubename)
console.log(anothername)

let userone ={
    name : "Shreshtha",
    upi : "shreshtha@ybl"
}

let usertwo = userone
usertwo.name = "Shreshtha YT"

console.log(userone.name)
console.log(usertwo.name) 



