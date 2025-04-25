//Difference between two ways of defining of string in js
let name = "vatsalya"
let name2 = new String('vasu')

console.log(name)
console.log(name2)
console.log(typeof(name2));//Object
console.log(typeof(name));

//Now we try to modifiey both

let newName = name
newName = "Shukla"
console.log(name);
console.log(newName);

console.log("---------------------------------");

let newName2 = name2
newName2 = 'nids'
console.log(name2);
console.log(newName2);





