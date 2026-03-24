// Immediately Invoked Function Expression (IIFE)
// is used to immediately execute a function after its defination and helps to avoid polluting the global scope with variables and functions

(function(){
    console.log("DB connected successfully");
})(); // this will immediately execute the function and print the message in the console

((name) => {
    console.log(`Welcome ${name} to our website`);
})("shreshtha")