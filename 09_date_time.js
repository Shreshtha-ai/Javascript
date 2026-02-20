let myDate = new Date() // Date is an object in js 
console.log(myDate) // prints the current date and time
console.log(myDate.toString())
console.log(myDate.toDateString()) 
console.log(myDate.toTimeString()) 
console.log(myDate.toISOString())
console.log(myDate.toJSON())

console.log(myDate.toLocaleString())
console.log(typeof myDate) 

let myCreatedDate = new Date(2027,0,23) 
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // prints the number of milliseconds since January 1, 1970
console.log(myCreatedDate.getTime()) // prints the number of milliseconds since January 1, 1970 till myCreatedDate
console.log(Math.floor(Date.now()/1000))

let newDate = new  Date()
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1) 
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekdays: "long",
    
    })