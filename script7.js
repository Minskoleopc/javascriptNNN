// Object 
//let info = ["amol","rao",77,34]

// Objects 
//database ---------- serverside ------- client
// xml / json


let info = {
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:77
}
console.log(info)
// retrive  (.dot notation and bracket notation)
console.log(info.firstName)
console.log(info['firstName'])

// udapte the data  (.dot notation and bracket notation)
info.firstName = "amol r"
console.log(info.firstName)
info['firstName'] = "amol d"
console.log(info.firstName)
// add the data (.dot notation and bracket notation)
info.city = "pune"
info['language'] = "hindi"
console.log(info)

// remove the data (.dot notation and bracket notation)
delete info.city
delete info['language']
console.log(info)

//             0       1    2        3
let names = ["ram","sham","satish","ramesh"]
for(let i =  0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}
let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    skills:["python","javscript","html","css"],
    age:26
}
console.log(info3)

for(let key in info3){
    console.log(key,info3[key])
}


