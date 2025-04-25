//Date object in JS

let myDate = new Date()
console.log(myDate)
// console.log(typeof(myDate)) ----> Object

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2025, 0 , 26, 4 , 34)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let newDate = new Date("2025-05-15")
console.log(newDate.toLocaleString());

let newDate2 = new Date("05-25-2015")
console.log(newDate2.toLocaleString());

//**************TimeStamp********************
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newDate2.getTime());
console.log(Math.floor(Date.now()));

//Internationalaization

let int = newDate.toLocaleString('default',{

    weekday: "long",
    day:"2-digit",
    dayPeriod:"short",
    timeStyle:"full"
})
console.log(int);










