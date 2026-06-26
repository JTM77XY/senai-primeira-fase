function gerar(){
let sprint = Number(prompt('quantos dias possui a sprint'))
let = total = 0

for(let i = 1; i <= sprint; i++){
let tarefas = Number(prompt('quantas tarefas foram feitas diariamente'))
 total = total + tarefas

  // console.log( 'dia ' + i +': ' + tarefas + " tarefa(s) concluida(s)")
document.getElementById("texto").innerHTML += ` dia ${i}:${tarefas} tarefas concluida(s).`
}
// console.log("total de tarefas concluidas: " + total)
document.getElementById("texto").innerHTML += ` total de tarefas concluidas ${total}`
}