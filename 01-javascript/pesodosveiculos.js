let pesobrutototal, taradoveiculo
let cargakg

pesobrutototal = Number(prompt("informe o peso do veiculo com a carga:"))
taradoveiculo = Number(prompt("informe somente o peso do veiculo"))

cargakg = pesobrutototal - taradoveiculo
console. log("o peso da carga que o caminhão está carregando é " + cargakg + "kg")
