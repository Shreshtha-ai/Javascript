// constNetflixuser = newObject()
const Netflixuser = {}

Netflixuser.id = "123abc"
Netflixuser.name = "John Doe"
Netflixuser.isLoggedIn = false

console.log(Netflixuser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shreshtha",
            lastname: "Agarwal "
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {obj1 , obj2}
console.log(obj3) // {obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}}

const obj5 = Object.assign({}, obj1, obj2, obj4) // merges the objects into a new object
console.log(obj5) // {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

const obj6 = {...obj1, ...obj2, ...obj4} // spread operator to merge the objects into a new object
console.log(obj6)

console.log(Object.keys(Netflixuser)) // an array of the keys of the object
console.log(Object.values(Netflixuser)) // an array of the values of the object
console.log(Object.entries(Netflixuser)) // an array of the key-value pairs of the object

console.log(Netflixuser.hasOwnProperty('isLoggedIn')) // true