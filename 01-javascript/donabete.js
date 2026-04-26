let valorbruto, presentes, premiações, comissões
let lucro

valorbruto = Number(prompt("informe o valor faturado:"))
premiações = Number(prompt("informe o valor das premiações:"))
presentes = Number(prompt("informe o valor dos presentes:"))
comissões = Number(prompt("informe o valor das comissões:"))

lucro = valorbruto - premiações - presentes - comissões
console. log("lucro é " + lucro)