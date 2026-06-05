// object literal 
const user = {
    username: "shreshtha",
    logincount: 9,
    isLoggedin: false,

    getUserDetails: function(){
        console.log("Got user details");
        console.log(`Username: ${this.username}`);
        console.log(`Login count: ${this.logincount}`);
        
    }
}
console.log(user.getUserDetails());

function User(username , logincount , isLoggedin){
    this.username = username
    this.logincount = logincount
    this.isLoggedin = isLoggedin
    
    return this

}
const userone = User("shreshtha", 12 , true)
console.log(userone)

const usertwo = User("Shreshtha",11,false)
console.log(userone) // usertwo will overrite the user one b/c of returnthis
// to avoid this we use new keyword
const userthree = new User("Shreshtha",11,false)
console.log(userthree)

console.log(userone.constructor)