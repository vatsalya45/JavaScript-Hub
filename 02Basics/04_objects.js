//singleton objects i.e. using constructor

const tinderUser = new Object

tinderUser.id = "123abs"
tinderUser.name = "Nids"
tinderUser.isAlive = true

console.log(tinderUser);

const regularUser = {
    
    email: "vats@gmail.com",

    fullName:{
        city:"Rewa",
        userFullName:{
                firstName: "Vatsalya",
                lastName: "Shukla"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

//merging objects

const obj1 = { 1: "a" , 2:"b"}
const obj2 = { 3: "c" , 4: "d"}


/*const obj3 = {obj1 , obj2}  
    --> same array like situation not merget only obj3 has 2 things obj1 and obj2
    console.log(obj3); { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } */

const obj3 = Object.assign({}, obj1, obj2)// assign is a static method having (target, source)
console.log(obj3);

//Spread 

const obj4 = {...obj1 , ...obj2 }
console.log(obj4);

//When values are coming from DB

console.log("************************When values are coming from DB***************");

const user = [
    {
        id:123,
        email: "v@gmail.com"
    },
    {
        id:1234,
        email: "vatsalya@gmail.com"

    },
    {
        id:14,
        email: "vatsalyashukla@gmail.com"

    },
    {
        id:124,
        email: "vatsalyagarg@gmail.com"

    }
]

console.log(user[1].email);
console.log(user[3].email);

console.log("************************When values are coming from DB on tinderUser object ***************");

console.log(tinderUser);
console.log(Object.keys(tinderUser));       //--> it will return an array of keys
console.log(Object.values(tinderUser));     //--> it will return an array of values
console.log(Object.entries(tinderUser));    //-->  it will return an array of keys and values

console.log(tinderUser.hasOwnProperty('userName')); //false

//Destructuring


console.log("**************************Destructuring******************************");

const course = {

    courseName: "JavaScript",
    coursePrice: "999",
    courseDuration: "15 Days"

}


console.log(course.courseName)      // it is long and repeatative way

const {courseName: n}  = course //De-structuring of object and giving small name to the key

console.log(n);

