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


let rolagen2 = 0
let rolagen = 0
function D2(){
    rolagen += 2
    rolagen2 = 2
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2
}
function D4(){
    rolagen += 4
    rolagen2 = 4
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2   
}
function D6(){
    rolagen += 6
    rolagen2 = 6
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2
}
function D10(){
    rolagen += 10
    rolagen2 = 10
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2
}
function D12(){
    rolagen += 12
    rolagen2 = 12
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2
}
function D20(){
    rolagen += 20
    rolagen2 = 20
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML += "D"+ rolagen2
}
function reset(){
    rolagen = 0
    rolagen2 = 0
    document.getElementById("totalrolagens").innerHTML = "total das rolagens:" + rolagen
    document.getElementById("dado").innerHTML = "último dado:" + rolagen2
}





let dinosorteado = "velocirraptor"
let aposta = 0
function espinossauro(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "espinossauro"
}
function TRex(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "T-rex"
}
function braquiossauro(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "braquiossauro"
}
function velocirraptor(){
  let valorAposta = Number(document.getElementById("jogodino").value)
  let = dobro = 2*valorAposta
  document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
  document.getElementById("resultado").innerHTML = "Resultado:" + dobro + " você acertou"
  document.getElementById("dino").innerHTML = "Seu dino:" + "velocirraptor"
}
function estegossauro(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "estegossauro"
}
function triceratopo(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "triceratopo"
}
function anquilossauro(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "anquilossauro"
}
function parassaurolofo(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "parassaurolofo"
}
function alossauro(){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "alossauro"
}
function carnotauro (){
let valorAposta = Number(document.getElementById("jogodino").value)
aposta = aposta + valorAposta
document.getElementById("resultado").innerHTML = "Resultado:" + "você errou"
document.getElementById("sorteado").innerHTML = "Dino sorteado:" + dinosorteado
document.getElementById("valorarrecadado").innerHTML = "valor arrecadado:" + aposta
document.getElementById("dino").innerHTML = "Seu dino:" + "carnotauro"
}















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