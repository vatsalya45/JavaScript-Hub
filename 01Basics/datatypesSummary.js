//Summary of the Datatypes

// How we keep the data into memory a/c to it there are 2 types of the 
// datatypes are there in the JS
//(1) Primitive --> String, Number, Boolean, null, undefined, Symbol and BigInt
//(2) Reference --> Array, Object and function
 

//(1) Primitive 
let score = null
let age;
//Symbols
let id = Symbol('45')
let newId = Symbol('45')

//Comparing the id and newId

console.log(id === newId) //--> false

//Here the content of the id and newId is same but due to the Symbol datatype the
// return value of both is differnet that is why it will give false

let biIntNumber = 989548738972n
console.log(biIntNumber)

//(2) Reference
//          Array
const cricketers = ["Rohit", "Sachin", "Virat"];

console.log(`Array -->`+cricketers)
console.log(typeof cricketers)

//          Object
//Do not use equals to  = in Object use : colon
const obj = {

    naam : "vatsalya",
    umr : 21,
    adr : "Rewa"
}
console.log(`My Object --> `+obj)
console.log(typeof obj)//gives Object

//          Function
//We can treat Function as variable in js
let myFun = Function()
{
    console.log(`Hello World`)
}
console.log(`My first Function --> `+myFun)

console.log(typeof myFun)//gives Function object 