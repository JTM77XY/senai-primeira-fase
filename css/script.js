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

function entradanopalco(){
let somfuncionando, figurinocompleto

somfuncionando = (prompt("o sistema de som está funcionando? sim ou não:"))
figurinocompleto = (prompt("o figurino está completo? sim ou não:"))

if( somfuncionando == "sim" && figurinocompleto == "sim"){
    document.getElementById("resultado").innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!"
}else{
    if(somfuncionando == "não" && figurinocompleto == "sim"){
        document.getElementById("resultado").innerHTML = "Sem som. Realizar apresentação alternativa no salão."
    }else{
        if(somfuncionando == "sim" && figurinocompleto == "não"){
            document.getElementById("resultado").innerHTML = "Faltando parte do figurino. Te vira no improviso!"
        }else{
            document.getElementById("resultado").innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer…"
        }
    }
}

}

function SistemadeTransporte(){
let emManutencao, emergenciaAtiva

emManutencao = (prompt("ha manutenção no sistema da transporte? sim ou não:"))
emergenciaAtiva = (prompt(" o nível de emergência do parque está alto? sim ou não"))

if(emManutencao == "não" && emergenciaAtiva == "não"){
    document.getElementById("resultado").innerHTML = "Transporte liberado para uso."
}else{
  document.getElementById("resultado").innerHTML = "Transporte indisponível por motivo de segurança." 
}

}

function centrodecomando(){
let crachaValido, digitalReconhecida

crachaValido = Number(prompt("seu crachá está validado? digite o número do crachá:"))
digitalReconhecida = (prompt("a digital está cadastrada? sim ou não:"))

if(crachaValido == 1 && digitalReconhecida == "sim"){
    document.getElementById("resultado").innerHTML = "Acesso liberado ao Centro de Comando"
}else{
  if(crachaValido != 1 && digitalReconhecida == "sim"){
    document.getElementById("resultado").innerHTML =  "Crachá inválido. Dirija-se à recepção"
  }else{
    if(crachaValido == 1 && digitalReconhecida == "não"){
    document.getElementById("resultado").innerHTML =  "Falha na digital. Tente novamente ou chame o suporte"
    }else{
        document.getElementById("resultado").innerHTML = "Acesso negado. Verifique sua identificação."
    }
  }  
}

}

function jaulasautomatizadas(){
let visitantesNaArea, horaAtual

visitantesNaArea = Number(prompt("informe o número de visitantes na área:"))
horaAtual = Number(prompt("informe o horário:"))

if(visitantesNaArea == 0 && horaAtual > 18){
  document.getElementById("resultado").innerHTML = "Liberação autorizada. Abrindo jaula." 
}else{
  if(visitantesNaArea == 0 && horaAtual <8){
    document.getElementById("resultado").innerHTML = "Liberação autorizada. Abrindo jaula."
  }else{
    document.getElementById("resultado").innerHTML = "Liberação negada. Área em uso ou fora do horário permitido."
  }
   
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