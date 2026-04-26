let quantidadetoken=5, caracterprompt, custotoken
let totaltoken, custototaltoken

caracterprompt = Number(prompt("informe o número de caracter do prommpt:"))
custotoken = Number(prompt("informe o custo do token:"))

totaltoken = caracterprompt*1+quantidadetoken
console. log("número de tokens usados é:" + totaltoken)
custototaltoken = custotoken*totaltoken
console. log("valor total de tokens é: " + "R$" + custototaltoken.toFixed(2))



