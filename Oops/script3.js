// // function constructor

// function Person(fn,ln,age,rollNo){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = age
//     this.rollNo = rollNo
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol = new Person("amol","rao",23,34)
// let chinmay = new Person("chinmay","deshpande",22,44)

// // console.log(amol)
// // console.log(chinmay)

// // chinmay.display()
// // amol.display()

// console.log(amol.__proto__ == Person.prototype)
// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.country = "India"


// console.log(amol)
// console.log(chinmay)

// chinmay.display()
// amol.display()

// console.log(amol.country)
// console.log(chinmay.country)

// console.log(amol instanceof Person)
// console.log(chinmay instanceof Person)

// console.log(amol.hasOwnProperty('firstName'))
// console.log(amol.hasOwnProperty('country'))

// let names = ["apple","mango","grapes","chikoo"]
// console.log(names)

// names.push("papaya")
// console.log(names.__proto__ === Array.prototype)
// Array.prototype.greetHello = function(){
//     console.log("hello")
// }
// names.greetHello()


//Es6 class
// class PersonC  {
//     constructor(fn,ln,rollNo,age){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo = rollNo
//         this.age = age
//         // this.display = function(){
//         //     console.log(this.firstName + this.lastName)
//         // }

//     }

//     display(){
//         console.log(this.firstName+ this.lastName)
//     }



// }


// let amolB = new PersonC("amol","rao",12,34)
// let chinmayB = new PersonC("chinmay","deshpande",22,30)

// console.log(amolB)
// console.log(chinmayB)

// amolB.display()
// chinmayB.display()


// Object.Create()

let obj = {
    init:function(fn,ln,ag,rollNo){
        this.firstName = fn  
        this.lastName = ln
        this.age = ag
        this.rollNo =  rollNo
    },
    display:function(){
        console.log(this.firstName+ this.lastName)
    }
}

let a  = Object.create(obj)
console.log(a)
a.init("chinmay","deshpande",23,45)
a.display()






