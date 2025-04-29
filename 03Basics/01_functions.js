//Functions in js

function fun1(){
    console.log(`My name is Vatsalya Shukla`);
    
}


fun1    //reference only
fun1() //execution

function sub(number1, number2){

    console.log(number1 - number2);
    
}

//sub(13,"7") --> 6


function add1(number1, number2){

    let result = number1 + number2
    console.log(result);
    
}

add1


function add2(number1, number2){

    let  result = number1 + number2
    return result
}

add2

//let result  = add1(3,4)  --> 7 

// console.log(`result : ${result}`); --> undefine

let result  = add2(3,4)

console.log(`result : ${result}`); //--> 7


function loginUserMsg(userName){ // if we give userName = 'vasu' then it will be default value   
                                //  and after passing any value it will be over write the default value
    
    return `${userName} just logged in `
}

console.log(loginUserMsg('vatsalya'));//for empty it will give undefined

console.log(`********************Object as a parameter*********************`);

const user = {

    userName: "Vatsalya",
    price:899,
    item:'radio'
}

function handleObject(anyObject){

    console.log(`User ${anyObject.userName} has purchased ${anyObject.item} at ${anyObject.price} rupees`);
    
}

handleObject(user)
//passing direct object

handleObject({

    userName:'vasu',
    item:'bike',
    price:199999
})
//only thing is that our keys must match otherwise it will print undefined

console.log(`********************Array as a parameter*********************`);

let myArr = [100,200,300,400]

function handleArrays(anyArray){

    console.log(anyArray[1]);
     
}
handleArrays(myArr)

//passing direct array

handleArrays([100,200,300])
