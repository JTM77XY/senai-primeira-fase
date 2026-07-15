
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
}

function limparformulario(){
   document.getElementById('input-nome').value = ''   // esses documents limpam os inputs se cocolar: ''
   document.getElementById('input-altura').value = ''
   document.getElementById('input-cor').value = ''
   document.getElementById('input-custo').value = ''

   document.getElementById('input-nome').focus()
}

function mostrartodos(){
 for(let i = 0; i<dinos.length; i++){
    // alert(dinos[i].nome)
    document.getElementById('painel-dinos').innerHTML += `<p>${dinos[i].nome}</P>`
 }

}


// function testar(){
// dinos = [
//  {
//     id: Date.now(),
//     nome: "testessauro",
//     altura: 3,
//     cor: 'marrom',
//     custo: 14,

// }

// {
//     id: Date.now(),
//     nome: "t-rex",
//     altura: 3,
//     cor: 'marrom',
//     custo: 14,

// }
// ]
//  console.log(dinos)

// }

