const myObj = {
    'js': 'Javascript',
    'rb': 'Ruby',
    'py': 'Python'
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
} // for in loop is used to iterate over the keys of an object

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    //console.log(key)
    console.log(programming[key])
} // for in loop is used to iterate over the keys of an array

const map = new Map()
map.set('IN', 'India')

for (const key in map) {
    console.log(key)
}
// NO OUTPUT





