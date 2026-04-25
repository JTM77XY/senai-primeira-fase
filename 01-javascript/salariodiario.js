let salario, diastrabalhados
let pagamentodiario, pagamentosemanal

salario = Number(prompt("digite o salário:"))
diastrabalhados = Number(prompt("informe os dias trabalhados:"))

pagamentodiario = salario / diastrabalhados
console. log("valor por dia trabalhado é R$" + pagamentodiario)
pagamentosemanal = pagamentodiario * 5
console. log("valor por semana trabalhada é R$" + pagamentosemanal)