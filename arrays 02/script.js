// const nomes = [
//   "Lúcio Fernando",
//   "Rivaldo Jesus",
//   "Mônica",
//   "Capitão Ganso",
//   "Peba",
//   "Gill Bates",
//   "Dona Bete",
//   "Kowalski",
//   "Heitor Tuga",
//   "Junin",
//   "Padre Ernan Buco",
//   "GENéZio",
//   "Bilu",
//   "Waldisney",
//   "Tião"
// ];


let produtos = ['meia','pá de corte','suco de manga','leite']
let precos = [665.9999,777,12,4]

function verProdutos(){
    for(let i = 0; i<produtos.length; i++){
        let j = i +1
        document.getElementById('listaprodutos').innerHTML += '<p>' + j + '°:'+ produtos[i] + "</p>"
    }
}


function verProdutoscomprecos(){
    document.getElementById('listaprodutos').innerHTML = ''
    for(let i = 0; i<produtos.length; i++){
        let j = i +1
        document.getElementById('listaprodutos').innerHTML += '<p>' + j + '°:'+ produtos[i] + ' R$ '+ precos[i].toFixed(2).replace('.',',') +"</p>"
    }
}



function remover(){
 produtos.pop() // remove o produto
 precos.pop() // remove preço
 verProdutoscomprecos() //atualiza a lista na tela
}


let total
function aumentar(){
    document.getElementById('listaprodutos').innerHTML = ''
 for(let i = 0; i<produtos.length; i++){
      total = precos[i]+ precos[i]*3
      console.log(total)
      document.getElementById('listaprodutos').innerHTML += 'preço novo : '+ ' R$ '+ total + '<p>'
    }

}


function adicionar(){
  let preco, produto
//   do{
//     produto = prompt('nome do produto')
//   }while(produto == '')

  produto = prompt('nome do produto')
  preco = Number(prompt('preço do produto'))

  produtos.push(produto)
  precos.push(preco)
  verProdutoscomprecos()
  
}

let semana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']
semana.push('feriado')
console.log(semana)
