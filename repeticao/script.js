// let contador = 0 // inicializacao

// while(contador < 10){ //(condicao de repeticao)
//     alert("contador: " + contador)                                     //while=enquanto
    
//     contador++ // contagem
// }//voltar e testar novemente


let peso 
let contador = 0
while(contador < 10){
peso = Number(prompt("digite do peso:"))
if(peso > 1.1 || peso < 0.9){
    alert("fora tolerância do peso")
}
contador++
}
