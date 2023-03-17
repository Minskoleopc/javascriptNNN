
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonC = document.querySelector('#one')

console.log(ulList)
console.log(inputText)
console.log(buttonC)

buttonC.addEventListener('click', function () {
    let txt = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt                // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})


ulList.addEventListener('click',function(event){

    // console.log(event.target) // element
    // console.log(event.target.tagName)//tagName
    // console.log(event.target.className)//className

    if(event.target.tagName === "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if(event.target.className === "up"){
            console.log('hello')
            let li = event.target.parentElement
            let prev = li.previousElementSibling
            let ul = li.parentElement
            if(prev){
                ul.insertBefore(li,prev)
            }
                
        }
        else if(event.target.className === "down"){
            let li = event.target.parentElement
            let next = li.nextElementSibling
            let ul = li.parentElement
            if(next){
                ul.insertBefore(next,li)
            }
        
        }



    }


})











{/* <button class = "remove">Remove</button>
            <button class = "up">Up</button>
            <button class = "down">Down</button> */}

function createButtons(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button >Remove</button>
    remove.classList.add('remove') // <button class = "remove" >Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button >Up</button>
    up.classList.add('up') // <button class = "up" >Remove</button>
    li.appendChild(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" // <button >Up</button>
    down.classList.add('down') // <button class = "up" >Remove</button>
    li.appendChild(down)

}