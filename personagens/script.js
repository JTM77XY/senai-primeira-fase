let personagens = ["Rivaldo Jesus","Kowalski","Genezio","Waltdisney"]
console.log(personagens)
let posicao = []

// for(let i = 0; i < personagens.length; i++){
//      posicao.push(i)
//     }
//     console.log(posicao)

function buscarIndice(){
     let personagem = document.getElementById('valor').value
     if(personagem == personagens[posicao[0]]){
        console.log(personagem +' está no indice ' + posicao [0])
     }else if( personagem == personagens[posicao[1]]){
        console.log(personagem +' está no indice ' + posicao [1])
     }else if(personagem == personagens[posicao[2]]){
        console.log(personagem +' está no indice ' + posicao [2])
     }else if(personagem == personagens[posicao[3]]){
      console.log(personagem +' está no indice ' + posicao [3])
     }else if(personagem == personagens[posicao[4]]){
      console.log(personagem +' está no indice ' + posicao [4])
     }
    
}


function adicionar(){
  let personagem = document.getElementById('valor').value
   personagens.push(personagem)
   console.log(personagens)

for(let i = 0; i < personagens.length; i++){
     posicao.push(i)
    }
    console.log(posicao)

}














   
// let personagem
// function adicionar(){
//    personagem = document.getElementById('valor').value
   
//    for( i = 0; i < personagens.length; i++){
//      personagens[i]
    
//     if(personagem != personagens[i]){
//       personagens.push(personagem)
//     }
   
//     }
//    personagens.push(personagem)
//    console.log(personagens)

// }

// function buscarIndice(){
//    let i
//    for( i = 0; i < personagens.length; i++){
//      personagens[i]
    
//     if(personagem == personagens[i]){
//       console.log(`${personagens[i]} está no indice ${i}`)
//     }
   
   
//     }
    
// }
