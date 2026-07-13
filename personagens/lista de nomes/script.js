
let nomes = []
console.log(nomes)

function adicionar(){
 let pessoa = prompt("digite um nome:")
//  let i
//  let total
// for( i = 0; i <nomes.length; i++){ // faz o contador aumentar tendo como limite o tamanho do array.
//     total = i
//     console.log(total)
// }

// if(pessoa == nomes[total]){
//     console.log('não pode ser repetido')
//     document.getElementById('resultado').innerHTML = `não pode repetir o nome ${pessoa}`
// }else{
//     nomes.push(pessoa)
//     console.log(nomes)
//     document.getElementById('resultado').innerHTML = nomes
// }
    nomes.push(pessoa)
    console.log(nomes)
}


function verificar(){
let verificarpessoa = prompt('digite o nome que voçe quer verificar:')
let presente = nomes.includes(verificarpessoa)
console.log(presente)
}

function indicedoelemento(){
let verificarindice = prompt('digite o nome que voçe quer saber o indice:')
let indice = nomes.indexOf(verificarindice)
console.log(indice)
}


function remover(){
let escluir = prompt('digite o nome que sera removido:')
 let indiceP = nomes.indexOf(escluir)
nomes.splice(indiceP,1)
console.log(nomes)
}


function reverse(){
nomes.reverse()
console.log(nomes)

}

function reiniciar(){
    nomes = []
    console.log(nomes)
}