let number = document.querySelector(".number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let num = 0;
if(num===0){
    number.style.color="grey";
}

increase.addEventListener("click", ()=>{
    num++;
    number.innerHTML=num;
    if(num>0){
        number.style.color="green";
    }else if(num===0){
        number.style.color="grey";
    }
})

decrease.addEventListener("click", ()=>{
    num--; 
    number.innerHTML=num;
    if(num<0){
        number.style.color="red";
    }else if(num===0){
        number.style.color="grey";
    }
})

reset.addEventListener('click', ()=>{
    num = 0;
    number.innerHTML=num;
    if(num===0){
        number.style.color="grey";
    }
})

