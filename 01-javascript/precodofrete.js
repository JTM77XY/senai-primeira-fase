let peso, distancia, volume
let frete

peso = Number(prompt("informe o peso:"))
distancia = Number(prompt("informe a distância:"))
volume = Number(prompt("informe o volume:"))

frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
// console. log("preço do frete é " + frete.toFixed(2))

if(peso > 0 && distancia > 0 && volume > 0){
  console.log("preço do frete é " + frete.toFixed(2))  
}else{
    console.log("erro")
}