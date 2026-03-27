const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// }) // using arrow function 


function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // passing function as a callback

const myCoding = [
    {
        languagename: "javascript",
        languagefile: "js"
    },
    {
        languagename: "python",
        languagefile: "py"
    },
    {
        languagename: "java",
        languagefile: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagefile)
})

// in for each loop we cant return anything 
// if we want to return anything then we use filter

