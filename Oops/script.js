// // string 
// // array 
// // ojects 
// // DOM -- html

// // Object literal
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:12,
//     rollNo:45
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:13,
//     rollNo:33
// }
// // retrive the data using dot notation and bracket notation

// // function constructor

// // function Person(fn,ln,ag,rl){
// //     this.firstName  = fn
// //     this.lastName =ln
// //     this.age = ag
// //     this.rollNo = rl
// // }

// // let Person = (fn,ln,ag,rl) =>{
// //     this.firstName  = fn
// //     this.lastName =ln
// //     this.age = ag
// //     this.rollNo = rl
// // }

// let sarika = new Person("sarika","pansare",23,55)
// console.log(sarika)

// // Es6 class

// class PersonB {
//     constructor(fn,ln,rollNo,age){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo = rollNo 
//         this.age = age
//     }
// }
// let poorva = new PersonB("poorva","vyas",23,44)
// console.log(poorva)

// // Object.create()

// let navnath = Object.create({})
// console.log(navnath)
// navnath.firstName = "navnath"
// navnath.lastName = "kalyankar"
// navnath.age = 12
// navnath.rollNo = 44
// console.log(navnath)

// // -------------------------------------------
// // Object literal 
// // function contructor
// // Es6 class 
// // Object.create method

// Topic 2 Prototype inheritance

function PersonC(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.rollNo = rn
    // this.display = function(){
    //     console.log(this.firstName+ this.lastName)
    // }
}

let amol = new PersonC("amol","rao",34,45)
let chinmay = new PersonC("chinmay","deshpande",34,45)
// amol.display()
// chinmay.display()

console.log(amol)
console.log(chinmay)


// every object in js have one __proto__ method
//console.log(Object.__proto__ == Parent.prototype)

console.log(amol.__proto__ == PersonC.prototype)


PersonC.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}

PersonC.prototype.country = "India"

amol.display()
chinmay.display()

console.log(amol.country)
console.log(chinmay.country)

















