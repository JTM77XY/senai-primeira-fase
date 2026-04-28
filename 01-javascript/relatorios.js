let relatoriosPF, relatoriosPJ, tempoPF, tempoPJ, valorPF, valorPJ
let totalrelatorios, totaltempo, valortotal, mediavalorPF, mediavalorPJ
let mediatempoPF, mediatempoPJ

relatoriosPF = Number(prompt("informe o número de relatórios PF:"))
relatoriosPJ = Number(prompt("informe o número de relaatorios PJ:"))
tempoPF = Number(prompt("informe o tempo para elaborar os relatórios PF:"))
tempoPJ = Number(prompt("informe o tempo para elaborar os relatórios PJ:"))
valorPF = Number(prompt("informe o valor total recebido de PF:"))
valorPJ = Number(prompt("informe o valor total recebido de PJ:"))

totalrelatorios = relatoriosPF + relatoriosPJ
console. log(totalrelatorios + " relatorios")

totaltempo = tempoPF + tempoPJ
console. log("tempo total trabalhado: " + totaltempo + " horas")

valortotal = valorPF + valorPJ
console. log("valor total recebido: " + "R$" + valortotal)

mediavalorPF = valorPF / relatoriosPF
console. log("media do valor de cada relatório PF é: " + mediavalorPF.toFixed(2))

mediavalorPJ = valorPJ / relatoriosPJ
console. log("media do valor de cada relatório PJ é: " + mediavalorPJ.toFixed(2))

mediatempoPF = tempoPF / relatoriosPF
console. log("média de tempo gasto por relatório PF é: " + mediatempoPF.toFixed(2))

mediatempoPJ = tempoPJ / relatoriosPJ
console. log("média de tempo gasto por relatório PJ é: " + mediatempoPJ.toFixed(2))
