// html to have the text
// css - to style
// javascript - to make things dynamic based on user action


let headOne = document.querySelector('h1')
headOne.addEventListener('click',function(){
    headOne.style.color = "yellow";
    headOne.style.backgroundColor = "red";
    headOne.textContent = "poorva"
})