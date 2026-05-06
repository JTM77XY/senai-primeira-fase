let faturamento1, faturamento2, gasto
let lucroreal, lucropercentual

gasto = Number(prompt("informe o gasto:"))
faturamento1 = Number(prompt("informe o faturamento de ingressos:"))
faturamento2 = Number(prompt("informe o faturamento da venda de itens:"))

lucroreal = (faturamento1 + faturamento2) - gasto
console. log("lucro real é " + lucroreal)
lucropercentual = lucroreal*100/gasto
console. log("lucro percentual é: " + lucropercentual)

if(faturamento1 > faturamento2){
  console.log("capitão ganso fatura mais com os ingressos.")  
}else{
    console.log("capitão ganso fatura mais com os itens.")
}