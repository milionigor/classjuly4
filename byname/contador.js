let botao =document.getElementById("botao");
let numero = 0;
let botao2=document.getElementById("botao2");

botao.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero++
    
    count.innerHTML = numero;
})

botao2.addEventListener("click", function contador1(){
  let count = document.getElementById("count");
   numero--
    
   count.innerHTML = numero;
})