//Scopes in js



//scope is { this is a scope }

let a = 1000
if(true){
    let a = 100
    const b = 200
    var c = 300

    console.log(`Inner a : ${a}`);
    console.log(b);

}

console.log(a); 
// console.log(b); error 

console.log(c); //here c is accessiable which is bad that is why we should avoid var 


//nested scope 

function one(){

    const usreName = 'vatslaya'

    function two(){

        const websiteName = 'git hub'
        console.log(usreName);    
    }
    //console.log(websiteName);  --> error 
    two()
    
}

one()

if(true){

    let usreName = `vatsalya`
    if(usreName === 'vatsalya'){

        let websiteName = `git hub`
        console.log(`the ${websiteName} is used by ${usreName}.`);
        
    }
    //console.log(websiteName); --> error
    
}
// console.log(usreName); --> error


//Expression 

addOne()
function addOne(num) {
    
    return num + 1 ;
}


//this is expression 
// addTwo() --> error can not access the function (Hoisting)

const addTwo = function (num) { 
    
    return num + 2;
}
addTwo()


