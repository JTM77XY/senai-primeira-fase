
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

function salvardados(){
    localStorage.setItem('dinos', JSON.stringify(dinos))
     //let texto = JSON.stringify(dino)
     //let local storagr.setitem('dinos', texto)

}

function carregardados(){
   dinos = JSON.parse(localStorage.getItem('dinos'))
   console.log(dinos)
   //let textolido = localstorage.getitem('dinos')
   //
}

function cadastrardino(){ //as informações digitadas nos inputs são quardadas nas variaveis id, nome, altura, cor, custo.
    carregardados()
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
    mostrartodos() // a função cadastrardino está chamando a funcão mostrartodos
    salvardados()
}

function limparformulario(){
   document.getElementById('input-nome').value = ''   // esses documents limpam os inputs se cocolar: ''
   document.getElementById('input-altura').value = ''
   document.getElementById('input-cor').value = ''
   document.getElementById('input-custo').value = ''
   document.getElementById('input-id').value = ''
   document.getElementById('input-nome').focus() // faz o cursor aparecer no input nome.
}

function mostrartodos(){// é o espaço onde as informações que foram digitadas nos inputs vão ser exibidas na página.
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

window.location.href = '' //leva para outra página
function testar(){ // insere um dinossauro e caracteristicas predefinidas nas variaveis caso não queira digitar nada nos inputs.
    localStorage.setItem('teste', 45)
    let testedeleitura = localStorage.getItem('teste')
    console.log(testedeleitura)

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
    altura: 6,
    cor: 'preto',
    custo: 20,

}
]
 console.log(dinos)

}

function pesquisar(){ //pesquisa no array o nome digitado no input e se tiver algum nome igual ao digitano no array, puxa as caracteristcas do elemento pesquisado.
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


function salvardino(){ //depois de usar a função pesquisar e trazer as caracteristicas do elemento digitado para os inputs, essa função joga essas caracteristicas para o elemento pesquisado na função anterior udando o ID do elemento para saber o elemento certo.
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

function escluir(){// esclui um elemento e suas caracteristicas do array usando o seu ID para localizar esse elemento no array.
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