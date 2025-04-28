/*Objects in js
 two ways to declare objects in js
 1) using Literals 
 2) using Constructor


*/
const mySym = Symbol("key1")

const user = {
     name: "vatsalya",
     age: 22,
     email:"vatsalyas108@gmail.com",
     lastDay: ["monday","friday"],
     newUser:{
        city: "rewa",
        state:"mp"
     },
     "full Name": "vatsalya shukla",
     "course": "FSJ",
     //mySym: "myKey"//, --> typeof will give string   & o/p -->   mySym: 'myKey'

     [mySym]: "myKey2" //-->typeof will give stirng   & o/p -->   [Symbol(key1)]: 'myKey2'


}

console.log(typeof user[mySym]);
console.log(user.email);
console.log(user["full Name"]);
//console.log(user);

//We can change the values of the object  and can restrict the change upon the object also (by using freeze)

user.email = "vasu@45gmail.com"      //here we changed the value of the email key
console.log(user.email);             // vasu45gmail.com changed value
//Object.freeze(user)  ---> unfreezed by commenting 
user.age= 32
console.log(user.age);               //22 unchanged value

//object with function

user.greeting = function() {
    console.log("Hello JS learner");
}
 
console.log(user.greeting);               //[Function (anonymous)]  --> here function refernce is returned back
console.log(user.greeting());             //Hello JS learner       undefined --> but here function is executed

user.greetingTwo  = function() {
    console.log(`Hello ${this.name} a JS learner`); //this will refer to the key of the same object 
}

console.log(user.greetingTwo()); 

 





