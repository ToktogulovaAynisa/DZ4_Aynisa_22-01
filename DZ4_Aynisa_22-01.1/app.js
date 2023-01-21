const button = document.querySelector("button");
const lotos = document.querySelectorAll("span");

button.addEventListener("click", ()=>{
    for( let i= 0; i<=6; i++){
        lotos[i].innerHTML = Math.ceil(Math.random()*100)
    }
})