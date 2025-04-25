//Arrays in js 
//Declaration of an array
const arr = [0,1,2,3,4]
let arr2 = new Array('a','b','c')
console.log(arr[2]);
console.log(arr2[0]);

//Arrays methods
arr.push(5)
console.log(arr);
arr.push(6)
console.log(arr);


console.log(arr.pop())//6

arr.unshift(8)
console.log(arr);//add 8 at the first position i.e. 0th index

arr.shift()
console.log(arr);//Delete the first index element



console.log(arr.includes(9));//false
console.log(arr.indexOf(19));//-1
console.log(arr.join());//string form of an array

//slice and splice
let newArr = arr.slice(1,4)
console.log(newArr)
console.log(arr)

let newArr2 = arr.splice(1,4)
console.log(newArr2)
console.log(arr)//splice  will modifiey the original array












