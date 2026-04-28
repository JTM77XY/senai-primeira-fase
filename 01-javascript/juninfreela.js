let horastrabalhadas, cobranca1=350, cobranca2=500
let precototal, lucro

horastrabalhadas = Number(prompt("informe as horas trabalhadas:"))

precototal = horastrabalhadas*cobranca1+cobranca2
console. log("valor cobrado deve ser: " + "R$" + precototal)

lucro = precototal-cobranca2
console. log("lucro do freela é: " + "R$" + lucro)