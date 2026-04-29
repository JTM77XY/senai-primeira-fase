function calcilarPrecoBrique(){
let obra, preçodevenda

obra = Number(prompt("informe o valor da obra:"))

preçodevenda = obra + 2*obra
console. log("a obra deve ser vendida por: " + "R$" + preçodevenda.toFixed(2))
alert("a obra deve ser vendida por: " + "R$" + preçodevenda.toFixed(2))

document.getElementById("resultado").innerHTML = "a obra deve ser vendida por: " + "R$"
 + preçodevenda.toFixed(2) 
}