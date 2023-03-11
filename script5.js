// Arrays in js 
// 23 imp  method and properties


//              0          1      2      3         4
let  names = ["chinmay","chirag","ram","satish","ramesh"]


// Object 
// Properties 
// Methods

// Human 
// Properties  - weight age gender
// Methods Walk() , Talk()


// Vehicle 
// Properties - model , color , reg
// Method - start() , stop()


// Bank 
// Properties - accNo , accName , type , branch 
// Method - withDrawl() , depoist()

//              0          1       2     3         4
let names2 = ["chinmay","chirag","ram","satish","ramesh"]
console.log(names[0])

for(let i = 0 ; i < 5 ; i++ ){ // 1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 , 1 , 2 , 3 , 4
    console.log(names[i])
    // i - 0
    // i - 1
    // i - 2
    // i - 3
    // i - 4
}

// Properties and Methods of array

//             0         1        2      3        4
let fruits = ["apple","mango","banana","grapes","papaya"]
let q1 = fruits.length
console.log(q1)
console.log(fruits.length -1)
// length -1 is always the last index


// Set - 1
// Gym 
// action - excercise
// return - health

let vegetables = ["cabbage","cauliflower","brinjal","potato"]

// push()
// Action - to add the element at end of array
// Return - new length of array

let q2 = vegetables.push("sweet potato")
console.log(vegetables)
console.log(q2)


// unshift()

// Action - to add the element at first 
// Return - new lenth of array 
let q3 = vegetables.unshift('ladyfinger')
console.log(vegetables)
console.log(q3)

//['ladyfinger', 'cabbage', 'cauliflower', 'brinjal', 'potato', 'sweet potato' ]
// pop()
// action - to remove the last element 
// return - the same element 

let q4 = vegetables.pop()
console.log(q4)
console.log(vegetables)

// shift()
//[ 'ladyfinger', 'cabbage', 'cauliflower', 'brinjal', 'potato' ]

let q5 = vegetables.shift()
console.log(q5)
console.log(vegetables)

// includes()
//[ 'cabbage', 'cauliflower', 'brinjal', 'potato' ]

let q6 = vegetables.includes('Brinjal')
console.log(q6)

// indexOf()
let q7 = vegetables.indexOf('Mabbage')
console.log(q7)

// at()
let q8 = vegetables.at(2)
console.log(q8)


// set - ||


// map() , filer() , reduce() , forEach() , find() , findIndex() , some(), every()

//                0     1     2   3
let  birthYear = [1989,1990,1991,1992]
//[34,33,32,31]
let ages = []
for(let i = 0 ; i < birthYear.length ;i++){
    //console.log(i)
   // console.log(2023 - birthYear[i])
    let ii = 2023 - birthYear[i]
    ages.push(ii)
}
console.log(ages)

let q9 =  birthYear.map(function(el,index,arr){
        return 2023 - el
})
console.log(q9)


let tables = [1,2,3,4,5,6,7,8,9,10]
let q10 = tables.map(function(el,index,arr){
    return  el * 3
})
console.log(q10)

// filter()
let marks  = [33,44,55,66,77,8,88,66,77,22,33,44]
// [66,77,88,66,77]
let above60 = []

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

let q11 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q11)


let numbersa = [1,2,3]
let numberba = [33,44,55]
// // Function to return commonElements
// function getCommon(arr1, arr2) {
//     var common = [];                   // Array to contain common elements
  
//     for(var i=0 ; i<arr1.length ; ++i) {
//       for(var j=0 ; j<arr2.length ; ++j) {
//         if(arr1[i] == arr2[j]) {       // If element is in both the arrays
//           common.push(arr1[i]);        // Push to common array
//         }
//       }
//     }
    
//     return common;                     // Return the common elements
//   }
  
//   var arr1 = [45, 99, 55, 223, 17, 93, 23];
//   var arr2 = [45, 18, 93, 7, 23, 1, 223, 5];
  
//   // Get common elements of arr1, arr2
//   var commonElements = getCommon(arr1, arr2); // [45, 223, 93, 23]
//


let numberss = [3,4,5,6,-5,6,-6,99,-99,88,77,-66,-99,-33,77,-99]
let q14 = numberss.filter(function(el){
    return el < 0
})

let q15 = numberss.filter(function(el){
    return el > 0
})
console.log(q14)
console.log(q15)

// map() , filter() , reduce() , forEach()
// some() , every() , find() , findIndex()

//               0     1    2    3
let birthYears= [1989,1990,1991,1990]
// [34,33,32,31]
let agess = []

for(let i = 0 ; i < birthYears.length ; i++){
    //console.log(i)
   // console.log(2023 - birthYears[i])
    let t = 2023 - birthYears[i]
    agess.push(t)

}
console.log(agess)
birthYears= [1989,1990,1991,1990]
let q111 = birthYears.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q111)


// filter 
//           0   1  2  3  4  5  6  7  8
let mrks  = [45,66,77,33,88,99,44,55,88]
let above70 = []

for(let i = 0 ; i < mrks.length ; i++){
   // console.log(i)
   // console.log(mrks[i])
   if(mrks[i] > 70){
    above70.push(mrks[i])
   }
}
console.log(above70)
let q222 = mrks.filter(function(el,index,arr){
    return el > 70
})
console.log(q222)


// reduce

let na = [11,22,33] // 11 + 22 + 33  ===> 66
let ttl = 0

for(let i = 0 ; i < na.length ; i++){
    //console.log(i)
    //console.log(na[i])
    ttl = ttl + na[i]
    //     0  +  11   ====> 11
    //     11 +  22   ====> 33
    //     33 +  33   ====> 66
}
console.log(ttl)
let q333 = na.reduce(function(acc,el,index,arr){
    return el + acc // 33
},5)
console.log(q333)

// forEach()
let nms = ["chinmay","ram","shirish","satish"]
for(let i = 0 ; i < nms.length ; i++){
    console.log("welcome "+ nms[i])
}

// map()
// filter()
// reduce()
// forEach()

nms.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


let ii  = [444,548,555,333,555,888,999,222,555,66]
let ii2 = ii.filter(function(el,index,arr){
    return el > 500
})
console.log(ii2)


let ii22 = ii.find(function(el,index,arr){
    return el > 500
})
console.log(ii22)

let ii222 = ii.findIndex(function(el,index,arr){
    return el > 500
})
console.log(ii222)


let jjj = [3,44,22,33,55,88,99]
// true
let www = jjj.every(function(el,index,arr){
    return el > 10
})
console.log(www)

let jj2 = [3,44,22,33,55,88,99]

let wwwe = jj2.some(function(el,index,arr){
    return el > 100
})
console.log(wwwe)




// 7pm ist // oops

// 8pm ist 




































