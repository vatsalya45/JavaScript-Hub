//String is a primitive Datatype in the JS
//We can write in '' and "" both and most famous and use full is back tick operator `` 
//Due to it its String Inter polation feature

let name = 'vatsalya'
const age = 22
console.log("My name is "+name+" and my age is "+age);//do not use it 
console.log(`Hello my name is ${name} and my age is ${age}`);//String interpolation by injecting variable


//Seconde way to declare the String
const name2 = new String("vasu")//String is Object here (Object has key and value pair in js)

console.log(name2[0]);//v
console.log(name2.__proto__);//here we get object {}

//String functions

console.log(name2.length);
console.log(name2.toUpperCase());
console.log(`my name is ${name2}`);//value of name2 variable is not changed 
console.log(name2.charAt(2));
console.log(name2.indexOf('v'));

let newName = name2.substring(0,2)
console.log(newName)




