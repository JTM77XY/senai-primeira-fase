let quantidade, preco
let valortotal

preco = Number(prompt("preço:"))
quantidade = Number(prompt("quantidade:"))
valortotal = quantidade * preco

// console. log("valor a receber: R$" + valortotal.toFixed(2))

if(quantidade == 0 && preco == 0){
  console. log("erro")  
}else{
    if(quantidade > 100){
        console. log("entre em contato diretamente com a fábrica.")
    }else{
      console. log("valor a receber: R$" + valortotal.toFixed(2))
  
    }
}