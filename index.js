
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let copy = document.querySelector(".fa-copy")


window.addEventListener("load",()=>{
    input.value= ""
})

copy.addEventListener("click",()=>{
    input.select()
})

btn.addEventListener("click",()=>{
   
   let Chars = "1230456789qwertyuiopasdfghjklmnbvcxz!@#$%^&*()_+/*-+"
   let Password = ""   

    for(let i=0 ; i < 12 ; i++){
       
        let RandomPassword = Math.floor(Math.random()*Chars.length)
        Password += Chars.substring( RandomPassword , RandomPassword+1 )
    }

    input.value = Password

})


















