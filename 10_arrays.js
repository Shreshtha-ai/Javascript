//arrays
const myArr = [0,1,2,3,4,5];
const myHeroes = ["Batman","Spiderman","Superman"];

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9); // adds to the beginning of the array
console.log(myArr)

myArr.shift(); // removes the first element of the array 
console.log(myArr);

console.log(myArr.includes(6))
console.log(myArr.indexOf(5))

const newArr = myArr.join() 

console.log(newArr)
console.log(typeof newArr) 

// slice and splice

console.log("A", myArr)

const myn1 = myArr.slice(2,5) // last index is not included
console.log(myn1)

console.log("B", myArr);

const myn2 = myArr.splice(2,3) // removes 3 elements starting from index 2
console.log(myn2)
console.log("C", myArr)

const marvel_heroes = ['Ironaman','Spiderman','Daredevil']
const dc_heroes = ['Batman','Superman','Flash']

 marvel_heroes.push(dc_heroes) // marvel_heroes is now ['Ironaman','Spiderman','Daredevil',['Batman','Superman','Flash']]   
console.log(marvel_heroes)

console.log(marvel_heroes[3][1]) 

const allHeroes = marvel_heroes.concat(dc_heroes) // concatenates two arrays
console.log(allHeroes)

const allHeroes2 = [...marvel_heroes,...dc_heroes] // spread operator to concatenate two arrays
console.log(allHeroes2) 

const array1 = [1,2,3,[4,5],6,7,[8,9,[12,23]]]

const array2 = array1.flat(Infinity) // flattens the array to a single level
console.log(array2)

console.log(Array.isArray("Hello")) // checks if the value is an array
console.log(Array.from("Hello"))
console.log(Array.from({name: "Shreshtha"})) // since this is a object and we have not define if we want the key or the value to be converted to an array, it will return an empty array    

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3)) 