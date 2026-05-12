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

function VerificandoIdade(){
let idade

idade = Number(prompt("informe sua idade:"))

if(idade >= 18){
  document.getElementById("resultado").innerHTML = "maior de idade"
}else{
  document.getElementById("resultado").innerHTML = "menor de idade"
}

}

function adivinharnumero(){
// let numero = Math.round(Math.random()*10) //0..10
// let numero = Msth.floor(math.random()*10) //0..9
 let numero = Math.ceil(Math.random()*10) //1..10
 // let numero = Math.random()
    // console.log(numero);
    // numero = numero * 10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero);
let chute
chute = Number(prompt("chute um número de 1 a 10:"))
if(chute == numero){
  document.getElementById("resultado").innerHTML = "acertou"
}else{
  document.getElementById("resultado").innerHTML = "errou"
}

}

function mostrardiadasemana(){
let numero, dia

numero = Number(prompt("digita o número"))

if(numero == 1){
  dia = "domingo"
}else if(numero == 2){
  dia = "segunda"
}else if(numero == 3){
  dia = "terça"
}else if(numero == 4){
  dia = "quarta"
}else if(numero == 5){
  dia = "quinta"
}else if(numero == 6){
  dia = "sexta"
}else if(numero = 7){
  dia = "sábado"
}

document.getElementById("resultado").innerHTML = dia
}

function calcularparimpar(){
let n 

n = Number(prompt("digite o número"))

if(n%2 == 0){
  document.getElementById("resultado").innerHTML = "par" 
}else{
  document.getElementById("resultado").innerHTML = "impar"
}

}

function DecisãodeCompra(){
let precoItem, saldo

precoItem = Number(prompt("informe o preço do item:"))
saldo = Number(prompt("informe seu saldo:"))

if(saldo > precoItem){
  document.getElementById("resultado").innerHTML = "compra liberada"
}else{
  document.getElementById("resultado").innerHTML = "saldo insuficiente"
}
  
}

function idadecachorro(){
let idade
let anoshumanos

idade = Number(prompt("informe a idade do cachorro:"))

anoshumanos = idade*7

if(anoshumanos > 60){
  document.getElementById("resultado").innerHTML = "pode se aposentar por idade."
}else{
  document.getElementById("resultado").innerHTML =  "doguinho não pode se aposentar."
}

}

function VerificandoVotacao(){
let idade

idade = Number(prompt("informe a idade:"))

if(idade >= 16){
  document.getElementById("resultado").innerHTML = "elegivel para votar."
}else{
  document.getElementById("resultado").innerHTML = "não é elegivel para votar."
}

}

function CalculadoraIMC(){
let peso, altura
let imc 

peso = Number(prompt("informe o peso:"))
altura = Number(prompt("informe a altura:"))

imc = peso/(altura*altura)

if(imc > 25){
  document.getElementById("resultado").innerHTML = imc.toFixed(2) + " imc está acima de 25."
}else{
  document.getElementById("resultado").innerHTML =  imc.toFixed(2) + " imc está abaixo de 25."
}

}

function ConversorTemperatura(){
let celsius
let fahrenheit

celsius = Number(prompt("informe a temperatura em graus celsius"))

fahrenheit = celsius*9/5+32

if(fahrenheit > 68){
  document.getElementById("resultado").innerHTML = "alerta! super calor."
}else{
  document.getElementById("resultado").innerHTML = fahrenheit + " graus fahrenheit."
}

}

function GarcomDeCaraFeia(){
let salario, emprestimo, Nprestacoes
let valorprestacao, salarioporcento

salario = Number(prompt("informe o salario:"))
emprestimo = Number(prompt("informe o valor do empréstimo:"))
Nprestacoes = Number(prompt("informe o número de prestações:"))

valorprestacao = emprestimo/Nprestacoes
salarioporcento = salario*30/100

if(valorprestacao > salarioporcento){
  document.getElementById("resultado").innerHTML = valorprestacao.toFixed(2) + "R$" + " empréstimo não pode ser concedido"
}else{
  document.getElementById("resultado").innerHTML = valorprestacao.toFixed(2) + "R$" + " empréstimo concedido"
}

}

function StarUbers(){
let distancia, velocidadeluz = 300000
let temposegundo, tempominuto, tempohoras, tempodias, tempomeses, tempoAnos
let resposta = document.getElementById("resultado")

distancia = Number(prompt("informe a distancia em quilômetros:"))

temposegundo = distancia/velocidadeluz
tempominuto = temposegundo/60                    //<br> quebra de linha
tempohoras = tempominuto/60
tempodias = tempohoras/24
tempomeses = tempodias/30
tempoAnos = tempomeses/12

if(temposegundo > 60){
  resposta.innerHTML = temposegundo + " s " + "ou " + tempominuto + " minutos" 
}
if(tempominuto > 60){
    resposta.innerHTML += " ou " + tempohoras + " horas"
}
if(tempohoras > 24){
  resposta.innerHTML += " ou " + tempodias + " dias"
}
if(tempodias > 30){
  resposta.innerHTML += " ou " + tempomeses + " meses"
}
if(tempomeses > 12){
  resposta.innerHTML += " ou " + tempoAnos + " anos"
}
  
}































