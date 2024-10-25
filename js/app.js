let chaangee = document.querySelector(".CHANGE")
let CONVERT = document.querySelector(".CONVERT")
let wordch = document.querySelector(".wordch")
let wordai = document.querySelector(".wordai")
let RESET = document.querySelector(".RESET")
let inpu = document.querySelector(".inpu")
let flagg = false

let celcus
let faren
let damp = "F to C"


document.title = damp  
wordch.innerHTML = "Converter   "+damp
inpu.setAttribute("placeholder",damp)

/////////////////////////////////////////////////////

chaangee.addEventListener('click',function(){
    if(flagg){
        damp = "F to C"   
        flagg = false 
        
    }else {
        damp = "C to F"
        flagg = true 
    }

    document.title = damp  
 wordch.innerHTML = "Converter   "+damp
 inpu.setAttribute("placeholder",damp) 
})

/////////////////////////////////////////////////
CONVERT.addEventListener('click',function(){
let inpuy = inpu.value



if(inpu.value === ""){
    wordai.innerHTML = "empoty! enter the number !"
}else {

if(flagg===false){
    faren = (inpuy*1.8)+32
    wordai.innerHTML = faren
    wordai.style.display = "block"
}else{
    celcus = (inpuy-32)*5/9
    wordai.innerHTML = celcus
    wordai.style.display = "block"
} 
}
    
    })


////////////////////////////////////////////////////////


RESET.addEventListener('click',function(){
inpu.value = ""
wordai.innerHTML = ""
})



