//<h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// let headOne = document.querySelector('h1')
// let byId = document.querySelector('#one')
// let byclassName = document.querySelector('.two')
let byAtt = document.querySelector('h1[name="nm"]')
let changeButton = document.querySelector('button')

// console.log(headOne)
// console.log(byId)
// console.log(byclassName)
// console.log(byAtt)
//console.log(changeButton)

changeButton.addEventListener('click',function(){
    byAtt.style.color = "green";
})