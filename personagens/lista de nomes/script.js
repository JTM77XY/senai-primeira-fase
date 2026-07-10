
let nomes = []
console.log(nomes)

function adicionar(){
    let pessoa = prompt("digite um nome:")
    for(let i = 0; i < nomes.length; i++){
        // if(){}
        console.log(nomes[i])
    }
    
    nomes.push(pessoa)
    // console.log(nomes)
    document.getElementById('resultado').innerHTML = nomes
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
 let indiceP = nomes.indexOf('sonic')
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