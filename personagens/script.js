// let personagens = ["Rivaldo Jesus","Kowalski","Genezio","Waltdisney"]
// console.log(personagens)
// let posicao = []

// function buscarIndice(){
//      let personagem = document.getElementById('valor').value
//      if(personagem == personagens[posicao[0]]){
//         console.log(personagem +' está no indice ' + posicao [0])
//      }else if( personagem == personagens[posicao[1]]){
//         console.log(personagem +' está no indice ' + posicao [1])
//      }else if(personagem == personagens[posicao[2]]){
//         console.log(personagem +' está no indice ' + posicao [2])
//      }else if(personagem == personagens[posicao[3]]){
//       console.log(personagem +' está no indice ' + posicao [3])
//      }else if(personagem == personagens[posicao[4]]){
//       console.log(personagem +' está no indice ' + posicao [4])
//      }
    
// }


// function adicionar(){
//   let personagem = document.getElementById('valor').value
//    personagens.push(personagem)
//    console.log(personagens)

// for(let i = 0; i < personagens.length; i++){
//      posicao.push(i)
//     }
//     console.log(posicao)

// }




let presente
let nomes = []
console.log(nomes)

function adicionar(){
    let pessoa = prompt("digite um nome:")
    nomes.push(pessoa)
    console.log(nomes)
    document.getElementById('resultado').innerHTML = nomes
}


function verificar(){
 presente = nomes.includes('sonic')
console.log(presente)
}

function indicedoelemento(){
 let indice = nomes.indexOf('sonic')
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

function reiniciar(){}











   
