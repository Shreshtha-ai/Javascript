const email = "s@gmail.com"

if(email){
    console.log("Got your email")
}
else{
    console.log("Didn't get your email ")
}

// falsy values 
// false , 0 , -0, BigInt 0n, "", null, undefined, Nan 

// truthy values
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}
