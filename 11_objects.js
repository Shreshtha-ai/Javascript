//singelton
//object.create 

// object literal

const mySym = Symbol("key1")

const myObj = {
    name: "Shreshtha",
    "full name": "Shreshtha Agarwal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "shreshtha@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
   
}
console.log(myObj.name);
console.log(myObj["email"]);
console.log(myObj["full name"]) // we cant use dot notation when there is space in key name
console.log(myObj[mySym]) // to access symbol key we have to use square bracket notation

myObj.age = 19 // to update the value of a key
// Object.freeze(myObj) // to make the object immutable
myObj.age = 20 // this will not update the value of age as the object is frozen
console.log(myObj.age); 

myObj.greeting = function(){

    console.log("Hello " + this.name);

}

myObj.greetingTwo = function(){
    console.log(`Hello , ${this.name}`);
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());