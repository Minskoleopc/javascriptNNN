// comparison

let x = 10
//console.log(x)
console.log(typeof x) // number 


let y = true
//console.log(y)
console.log(typeof y) // boolean

let z = "chinmay"
//console.log(z)
console.log(typeof z)

// comparison operator


// < , > , <=,>= , != , == , ===, !==
// == , !=   --> value
// === , !==  ---> value as well type 

console.log(typeof 10)  // number
console.log(typeof '10') // string
console.log(10 == '10')
console.log(10 === '10')
console.log(3 === 3)
console.log(3 !== '3')
console.log(3 == '3')
console.log(3 === 3)
console.log('3' === '3')
console.log(3 == '3')
console.log(3 != '3')
console.log(5 > 3)

// Logical operator


// AND  -- &&

// True && True ====> True
// True && False ====> False
// False && True ====> False
// False && False ====> False

console.log(4 === 4 && 3 !== '3')
console.log(4 === 4 && 3 === '3')
console.log(4 !== 4 && 3 !== '3')
console.log(4 !== 4 && 3 === '3')


// Or --  ||

// True || True ====> True
// True || False ====> True
// False || True ====> True
// False || False ====> False


console.log(4 === 4 || 3 !== '3')
console.log(4 === 4 || 3 === '3')
console.log(4 !== 4 || 3 !== '3')
console.log(4 !== 4 || 3 === '3')

// Not
// True  --- False
// False --- True
console.log(!7 === 7)
console.log(!7 !== 7)

// condition statements
// one input --- Multiple outcomes

//numT  > 0  && numT <= 5  ---- 5 percent
//numT >  5  && numT <= 10 ---- 10 percent
//numT >  10                    20 percent

let numT = 4
// if(numT  > 0  && numT <= 5){
//     console.log('5% percent')
// }
// if(numT  > 5  && numT <= 10){
//     console.log('10% percent')
// }
// if(numT > 10){
//     console.log('20% percent')
// }


// if(numT  > 0  && numT <= 5){
//     console.log('5% percent')
// }
// else if(numT  > 5  && numT <= 10){
//     console.log('10% percent')
// }
// else if(numT > 10){
//     console.log('20% percent')
// }



let marks = 92

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }

// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log('Grade B')
// }
// else if(marks > 65){
//     console.log('Grade C')
// }

// tenary operator

let a = 10
let b = 5

if(a >b){
    console.log('a is greater')
}
else {
    console.log('b is greater')
}

a > b ? console.log('a is greater'):console.log('b is greater')


let age = 17
let q1 = age >= 18 ? "can drive":"cannot drive"
console.log(q1)























