console.log("hello")

// variable 
///let and const
let x = 10
console.log(x)
x = 100
console.log(x)

const y = 100
//y = 500
console.log(y)

// -----------------------------------

// Arithmetic operator 

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b) // remainder


let h = 100
let j = 50

console.log(h+j)
console.log(h-j)
console.log(h*j)
console.log(h/j)
console.log(h%j)

// functions 
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,6)
Calculator(121,65)

// Functions  3 ways to define a function 


// function declaration
function Add(x,y){
    return x + y
}
let q1 = Add(12,6)
console.log(q1)

// function expression
// let Add2 = function(x,y){
//     return x + y
// }
// let q2 = Add2(12,6)
// console.log(q2)

// arrow function 

// let Add3 = (x,y)=>{
//     return x + y
// }
// let q3 = Add3(20,10)
// console.log(q3)


// let Add3 = (x,y)=>x + y
// let q3 = Add3(20,10)
// console.log(q3)



// # ways to define function in javscript 

// function declaration 
function sub(x,y){
    return x - y
}
let q11 = sub(123,3)
console.log(q11)

// function expression 
let sub1 = function(x,y){
    return x - y
}
let q22 = sub1(20,10)
console.log(q22)

// arrow function 
// let sub2 = (x,y)=>{
//     return x - y
// }
// let q33 = sub2(20,10)
// console.log(q33)

// let sub2 = (x,y)=>x - y
// let q33 = sub2(20,10)
// console.log(q33)


























