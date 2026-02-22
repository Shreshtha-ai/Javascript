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
