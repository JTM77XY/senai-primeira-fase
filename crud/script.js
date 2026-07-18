
// C >> create >> cadastrar

// R >> read >> ler

// U >> update >> alterar/atualizar

// D >> Delete >> apagar/deletar

// const nomes = []
// const altura = []

// let dino = {
//     nome: "testessauro",
//     altura: 3,
//     cor: 'marrom',
//     custo: 14

// }
// console.log(dino)


let dinos = []

function cadastrardino(){
    const novodino = {
        id: Date.now(),
        nome: document.getElementById('input-nome').value,
        altura: Number(document.getElementById('input-altura').value),
        cor: document.getElementById('input-cor').value,
        custo: Number(document.getElementById('input-custo').value),
    }
    dinos.push(novodino)
    console.log(dinos)
    limparformulario() // a função cadastrardino está chamando a funcão limparformulario.
    mostrartodos()
}

function limparformulario(){
   document.getElementById('input-nome').value = ''   // esses documents limpam os inputs se cocolar: ''
   document.getElementById('input-altura').value = ''
   document.getElementById('input-cor').value = ''
   document.getElementById('input-custo').value = ''
   document.getElementById('input-id').value = ''
   document.getElementById('input-nome').focus()
}

function mostrartodos(){
    document.getElementById('painel-dinos').innerHTML = ''
 for(let i = 0; i<dinos.length; i++){
    // alert(dinos[i].nome)
    document.getElementById('painel-dinos').innerHTML += 
    `<div class ="card-dino">
    <h2>${dinos[i].nome}</h2>
    <p>altura:${dinos[i].altura}</p>
    <p>cor:${dinos[i].cor}</P>
    <p>custo:${dinos[i].custo}</p>
     </div>
    `
 }

}


function testar(){
dinos = [
 {
    id: Date.now(),
    nome: "testessauro",
    altura: 3,
    cor: 'marrom',
    custo: 14,

},
{
    id: Date.now(),
    nome: "t-rex",
    altura: 3,
    cor: 'marrom',
    custo: 14,

}
]
 console.log(dinos)

}

function pesquisar(){
    let nomeprocurado = document.getElementById('input-nome').value
    for(let i = 0; i <dinos.length; i++){
        if(nomeprocurado == dinos[i].nome){
            console.log(dinos[i])
            document.getElementById('input-altura').value = dinos[i].altura
            document.getElementById('input-cor').value = dinos[i].cor
            document.getElementById('input-custo').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id

        }
        
    }
}


function salvardino(){
    let id = Number(document.getElementById('input-id').value)
    for(let i = 0; i <dinos.length; i++){
        if(id == dinos[i].id){
            console.log(dinos[i])
           dinos[i].altura = document.getElementById('input-altura').value 
           dinos[i].cor = document.getElementById('input-cor').value 
           dinos[i].custo = document.getElementById('input-custo').value 
           dinos[i].id = document.getElementById('input-id').value 

        }
        
    }
   mostrartodos()
   limparformulario()
}

function escluir(){

     let id = Number(document.getElementById('input-id').value)
    for(let i = 0; i <dinos.length; i++){
        if(id == dinos[i].id){
           console.log(dinos[i])
           dinos.splice(i,1)

        }
        
    }
   mostrartodos()
   limparformulario()

}