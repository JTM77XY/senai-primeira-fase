let personagens = ["Rivaldo Jesus","Kowalski","Genezio","Waltdisney"]
console.log(personagens)

// function buscarIndice(){ //forma manual para mostrar o indice do elemento.
//      let personagem = document.getElementById('valor').value
//      if(personagem == personagens[0]){
//         console.log(personagem +' está no indice ' + personagens.indexOf('Rivaldo Jesus'))
//      }else if( personagem == personagens[1]){
//         console.log(personagem +' está no indice ' + personagens.indexOf('Kowalski'))
//      }else if(personagem == personagens[2]){
//         console.log(personagem +' está no indice ' + personagens.indexOf('Genezio'))
//      }else if(personagem == personagens[3]){
//       console.log(personagem +' está no indice ' + personagens.indexOf('Waltdisney'))
//      }else if(personagem == personagens[4]){
//       console.log(personagem +' está no indice ' + personagens.indexOf(personagem))
//      }
    
// }

function buscarIndice(){ // forma automatizada para mostrar o indice do elemento.
    let personagem = document.getElementById('valor').value
    for(let i = 0; i < personagens.length; i++){
    if(personagem == personagens[i]){
        console.log(personagem +' está no indice ' + i)
    }
 }

}

function adicionar(){ // adiciona um novo elemento no array personagens.
  let per = document.getElementById('adicao').value
   personagens.push(per)
   console.log(personagens) // mostra o array com o novo elemento atualizado
}













   
