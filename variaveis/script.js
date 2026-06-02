let cont = 0
function incrementarContagem(){
    // cont = cont + 1
    // cont+=
    cont++
    document.getElementById("p-contagem").innerHTML = cont
}

function decrementarcontagem(){
    cont--
    document.getElementById("p-contagem").innerHTML = cont
}

function somar10(){
    cont = cont + 10
    // cont += 10
    document.getElementById('p-contagem').innerHTML = cont
}

function somar2(){
    cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}

function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont
}



let total = 0
function registrarVenda(){
let valor = Number(document.getElementById("inputvenda").value)

total = total + valor

document.getElementById("totalvendido").innerHTML = 'Total de vendas: R$' + total.toFixed(2)
document.getElementById("listavendas").innerHTML += 'R$' + valor.toFixed(2) + '<br>'
document.getElementById("inputvendas").value = ''
document.getElementById("inputvendas").focus()   
}
function desfazer(){
    total = "Total de vendas: R$" + 0
    document.getElementById("totalvendido").innerHTML = total
}



let contD4 = 0
let contD2 = 0
let totalRolado = 0
function rolarDado(numero){
    // console.log(numero);
    let dado = Math.ceil(Math.random()*numero)
    document.getElementById('historico').innerHTML += '<span>d' + numero + ':' + dado + '</span>'
    // contarRolagem(numero)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}
function resetar(){
  totalRolado = 0
    document.getElementById('outputUltima').innerHTML = 'Não jogou ainda'
    document.getElementById('outputTotal').innerHTML = 0
    document.getElementById('historico').innerHTML = '' 
}  




let aposta = 0
function dinossauro(letra){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + "velocirraptor"
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + letra
}
function velocirraptor(dinorapido){
  let valorAposta = Number(document.getElementById("jogodino").value)
  let = dobro = 2*valorAposta
  document.getElementById("sorteado").innerHTML = "Dino sorteado:" + "velocirraptor"
  document.getElementById("resultado").innerHTML = "Resultado:" + dobro + " você acertou"
  document.getElementById("dino").innerHTML = "Seu dino:" + dinorapido
}
function lucro(){}














// let global = "eu sou uma variável global"
// function funcao1(){
    // let local = "sou uma variavel local :D"
    // console.log(local)
    // console.log(global)
// }
// function funcao2(){
//    console.log(global)
//    console.log(local)
// }

// funcao1()
// funcao2()