//Numbers and Maths in js
const score = 400
console.log(score)

let num = new Number(100)
console.log(num)

let decimal = 890.90990
console.log(num.toString());
console.log(decimal.toFixed(2));

console.log(decimal.toPrecision(3));// it will give string in return 

console.log(decimal.toPrecision(2));

const bigNum = 100000000
console.log(bigNum.toLocaleString('en-IN'));//it will in Indian standard

//************************Maths**************************
//Maths library comes as a default with js 

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(decimal));
console.log(Math.ceil(decimal));
console.log(Math.floor(decimal));


console.log(Math.max(45,67,87,53,21));
console.log(Math.min(45,98,998,7567,8764));

//Most Important Math.random()
console.log(Math.random()) // always gives a random number b/w 0 to 1
console.log((Math.random()*10) + 1)// to avoiding 0.0... like values

const min = 10 
const max = 20
 
console.log(Math.floor(Math.random() * (max - min + 1) + min));












