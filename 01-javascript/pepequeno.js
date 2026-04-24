let quantidade, preco
let valortotal

quantidade = Number(prompt("quantidade:"))
preco = Number(prompt("preço:"))
valortotal = quantidade * preco

console. log("valor a receber: R$" + valortotal.toFixed(2))

