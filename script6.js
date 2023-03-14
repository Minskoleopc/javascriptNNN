let city = 'pune'
let city2  = "pune"
let city3 = `pune`

console.log(city)
console.log(city2)
console.log(city2)

// string interpolation 

let firstName = "chinmay"
let lastName = "deshpande"

// My firstName is chinmay and my last name is deshpande
console.log(`My firstName is ${firstName} and my last name is ${lastName}`)

// String 
// String also stores the value by index 


let fruit = "Apple"
// 0  1  2  3  4
// A  p  p  l  e

console.log(fruit[0]) 
console.log(fruit[1]) 
console.log(fruit[2]) 
console.log(fruit[3]) 
console.log(fruit[4]) 

for(let i = 0 ; i < fruit.length ; i++){
   // console.log(i)
    console.log(fruit[i])
}

// Every in js is object , string is object
// object will have property and methods
let  fruit2 = "Banana"
let q1 = fruit2.length
console.log(q1)


let q2  = fruit2.toUpperCase()
console.log(q2)

let q3 = fruit2.toLowerCase()
console.log(q3)

let q4 = fruit2.includes("B")
console.log(q4)

let q5 = fruit2.includes("Bana")
console.log(q5)

let fruit3 = "apple mango banana"
let q6 = fruit3.split(" ")
console.log(q6)

//["apple","mango","banana"]
//"apple m","ngo" "b,"n","na"

let fruits4 = "cabbage"
let q7 = fruits4.startsWith('ca')
console.log(q7)

let fruits5 = "cabbage"
let q8 = fruits5.endsWith('age')
console.log(q8)

let  fruits6 = "papaya"
// 0  1  2  3  4  5
// p  a  p  a  y  a 
//-6 -5 -4 -3 -2 -1

//fruits6.slice(startIndex,endIndex)
console.log(fruits6.slice(2,5))
console.log(fruits6.slice(2))
console.log(fruits6.slice(-4))
console.log(fruits6.slice(-6,-2))
console.log(fruits6.slice(1,-2))
console.log(fruits6.slice(-1,-4))

let fruits7 = " chinmay "
console.log(fruits7.length)
let q9 = fruits7.trimStart()
console.log(q9.length)

let fruits77 = " chinmay "
console.log(fruits77.length)
let q10 = fruits77.trimEnd()
console.log(q10.length)

let q11 = fruits77.trim()
console.log(q11.length)



















