let custos, doacoes
let valorF

custos = Number(prompt("custos da igreja:"))
doacoes = Number(prompt("doaçoes:"))

valorF = custos - doacoes

if(doacoes < custos){
  console. log("valor que falta para pagar os custos mensais é R$" + valorF) 
  console.log("padre, lembre as pessoas que podem contribuir.")  
}else{
  console.log("a meta foi atingida.")
}

