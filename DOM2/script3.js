

// selecting the element 


let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let cl = inputText.value
    headOne.style.color = cl
    inputText.value = ""
})