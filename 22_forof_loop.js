// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)

}

const greeting = 'Hello World!'

for (const greet of greeting) {
    if (greet !== " ")
        console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United states of America')
map.set('Fr', 'France')

console.log(map)

// Iterating over a Map yields an array with both the key and value for each entry
for (const key of map) {
    console.log(key);

}

for (const [key, value] of map) {
    console.log(key, ':-', value)

}

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA'
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value)
} // Objects are not iterable 


