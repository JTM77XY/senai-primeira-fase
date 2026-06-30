function calcular(){
let txtv = Number(document.getElementById('txtvel').value)
document.getElementById('res').innerHTML = ` sua velocidade atual é de <strong>${txtv}km/h</strong>`
if(txtv > 60){
 document.getElementById('res').innerHTML += `<p>você está <strong>multado</strong> por excesso de velocidade</p>`   
}
document.getElementById('res').innerHTML += `<p>dirija com cinto de segurança!</p>`
}


/*
esplicação sobre as saidas/respostas:
as respostas ficam dentro de crazes e a variavel TXTV fica dentro das chaves e
um elemento com ID recebe todas as respostas.
as respostas são adicionadas uma depois da outra usando o operador += , que
junta um elemento com outro elemento existente.
*/