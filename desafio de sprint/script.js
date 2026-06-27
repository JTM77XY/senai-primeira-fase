function gerar(){
let sprint = Number(prompt('quantos dias possui a sprint')) // pergunta inicial
let = total = 0

for(let i = 1; i <= sprint; i++){
// let tarefas = Number(prompt('quantas tarefas foram feitas diariamente'))
let tarefas = Number(prompt(`quantas tarefas foram feitas no dia ${i}`)) //a funsão FOR vai fazer esse prompt se repetir pelo número de vezes que a variavel I é incrementada.
 total = total + tarefas

  // console.log( 'dia ' + i +': ' + tarefas + " tarefa(s) concluida(s)")
document.getElementById("texto").innerHTML += ` dia ${i}:${tarefas} tarefas concluida(s).` // o += vai adicionar as respostas de cada prompt repetido sem excluir ou sobrepor a resposta do prompt anterior.
}
// console.log("total de tarefas concluidas: " + total)
document.getElementById("texto").innerHTML += ` total de tarefas concluidas ${total}`
}