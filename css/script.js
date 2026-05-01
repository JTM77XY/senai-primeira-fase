function verificarprovisoes(){
let marujos, comida
let comidapormarujo

marujos = Number(prompt("quantidade de marujos"))
comida = Number(prompt("quilos de comida"))

comidapormarujo = comida / marujos

if(marujos >= 10 && comidapormarujo >= 1.5){
    document.getElementById("resultado").innerHTML = "provisões suficientes."
}else{
    document.getElementById("resultado").innerHTML = "provisões insuficientes"
}

}

function testederecrutamento(){
let sabenadar, idade, temrecomendacao

sabenadar = (prompt(" sabe nadar? sim ou não:"))
idade = Number(prompt("informe a sua idade:"))
temrecomendacao = (prompt(" tem carta de recomendação? sim ou não:"))

if(sabenadar == "sim" && idade >= 16){
document.getElementById("resultado").innerHTML = "aprovado para o navio"
}else{
    if( sabenadar == "não" && temrecomendacao == "sim" && idade >=14){
     document.getElementById("resultado").innerHTML = "aprovado sob recomendação"   
    }else{
        document.getElementById("resultado").innerHTML = "reprovado"
    }
}

}

function maquinadeFumaca(){
let criancaspequenas, velocidadedovento

criancaspequenas = Number(prompt("informe o número de crianças:"))
velocidadedovento = Number(prompt("informe a velocidade do vento em m/s:"))

if(criancaspequenas == 0 && velocidadedovento >= 0.5){
  document.getElementById("resultado").innerHTML = "fumaça liberada. que comecem os mistérios"  
}else{
    document.getElementById("resultado").innerHTML = "fumaça bloqueada. aquardar condições legais"
}

}

function deslocamentoparaeventos(){
    let etargripado, tempoviagem

    etargripado = (prompt("está gripado? sim ou não:"))
    tempoviagem = Number(prompt("informe o tempo de viagem:"))

    if(etargripado =="não" && tempoviagem < 45){
     document.getElementById("resultado").innerHTML = "viagem altorizada. rumo ao show!"   
    }else{
        document.getElementById("resultado").innerHTML = "deslocamento inviável. melhor recusar este evento"
    }

}

























// function calcilarPrecoBrique(){
// let obra, preçodevenda

// obra = Number(prompt("informe o valor da obra:"))

// preçodevenda = obra + 2*obra
// console. log("a obra deve ser vendida por: " + "R$" + preçodevenda.toFixed(2))
// alert("a obra deve ser vendida por: " + "R$" + preçodevenda.toFixed(2))

// document.getElementById("resultado").innerHTML = "a obra deve ser vendida por: " + "R$"
//  + preçodevenda.toFixed(2) 
// }