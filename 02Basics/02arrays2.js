//Arrays in js
const marvel_heroes = ['Thor','Ironman','Spiderman']
const dc_heroes = ['Superman','Batman','Flash']

//marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);

let newArr = dc_heroes.concat(marvel_heroes)
console.log(newArr);

//becaus array will hold different types of elements so it will hold complete dc_heroes as a single element

//proper way to merge two or more arrays is spred operator

newArr2 = [...dc_heroes,...marvel_heroes]
console.log(newArr2);


console.log(Array.isArray('vatsalya'))//false
console.log(Array.from("vatsalya"))//conversion
console.log(Array.from({name:'vatsalya'}))///interesting case bcz need to clearify.

let age1 = 16
let age2 = 17
let age3 = 18

console.log(Array.of(age1,age2,age3))




