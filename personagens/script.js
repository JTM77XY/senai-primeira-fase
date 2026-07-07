const personagens = ["Rivaldo Jesus","Kowalski","Genezio","Waltdisney"]
let posicao = []


for(let i = 0; i < personagens.length; i++){
     posicao.push(i)
    }
    console.log(posicao)

function buscarIndice(){
     let personagem = document.getElementById('valor').value
     if(personagem == personagens[posicao[0]]){
        console.log(personagem +' está na posição ' + posicao [0])
     }else if( personagem == personagens[posicao[1]]){
        console.log(personagem +' está na posição ' + posicao [1])
     }
    
}



//    let i = 0
//   while(i < personagens.length){
//     if(i == 0){
//         console.log(`${personagens[i]} está no indice 0`)
//     }else if(i == 1){
//         console.log(`${personagens[i]} está no indice 1`)
//     }else if(i == 2){
//         console.log(`${personagens[i]} está no indice 2`)
//     }else if(i == 3){
//         console.log(`${personagens[i]} está no indice 3`)
//     }
//     i++
// }