//Comparision
//Comparing b/w miss matched datatypes
console.log("2" > 1)
console.log("04" > 2)

//Avoided comparision

console.log(null < 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined < 0)
console.log(undefined == 0 )
console.log(undefined >= 0)

// We should avoid these types of comparision

//Strict Comparing
console.log("45" = 45) //true 
console.log("45" === 45)   // false because it will also compare datatype