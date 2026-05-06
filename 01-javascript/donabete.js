let valorbruto, presentes, premiações, comissões, metalucro
let lucro, faltou

valorbruto = Number(prompt("informe o valor faturado:"))
premiações = Number(prompt("informe o valor das premiações:"))
presentes = Number(prompt("informe o valor dos presentes:"))
comissões = Number(prompt("informe o valor das comissões:"))
metalucro = Number(prompt("qual é a sua meta de lucro?"))

lucro = valorbruto - premiações - presentes - comissões
faltou = metalucro - lucro

if(lucro > metalucro ){
   console.log(lucro + " bateu a meta") 
}else{
    console.log("faltou " + faltou )
}

