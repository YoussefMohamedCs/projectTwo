let loading = document.getElementById("loading")
let skChase = document.getElementById("skChase")
let h2 = document.getElementById("h2")



setTimeout(function(){
    skChase.style.display="none"
} , 3000)

setTimeout(function(){
    h2.style.display="flex"
} , 3001)


setTimeout(function(){
    // h2.style.display="none"
    h2.style.opacity="0"
    h2.style.transition="all .6s"
} , 4500)

setTimeout(function(){
    h2.style.display="none"
    loading.style.display="none"
} , 5000)





