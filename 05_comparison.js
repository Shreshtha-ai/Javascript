console.log( 2>3);
console.log( 2>= 2);
console.log( 2<3);


console.log("2" >1) // true because js converts the string "2" to number 2 and then compares

console.log(null >0);
console.log(null == 0); 
console.log(null >= 0); // true because null is converted to 0 and then compared

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); // false because undefined is converted to NaN and NaN is not comparable to any number

console.log(null == undefined);

// strict check(===) checks for both value and type 

console.log(101 === 101) // true because both value and type are same
console.log(2 === "2") // false because value is same but type is different
