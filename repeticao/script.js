// let contador = 0 // inicializacao
// while(contador < 10){ //(condicao de repeticao)
//     alert("contador: " + contador)                                     //while=enquanto
    
//     contador++ // contagem
// }//voltar e testar novemente

// let peso 
// let contador = 0
// while(contador < 10){
// peso = Number(prompt("digite do peso:"))
// if(peso > 1.1 || peso < 0.9){
//     alert("fora tolerância do peso")
// }
// contador++
// }

// let total = 0
// let i = 0
// while(i < 3){
//     i++
//     let preco = Number(prompt("digite o preço do " + i + "° produto:"))
//     total = total + preco
//     document.getElementById("total").innerHTML += i + "°produto: R$" + preco.toFixed(2)+"<br>"
//     // i++
// }
// alert(total)


//exercicio 1
// let contadorqudrado = 0
// while(contadorqudrado < 10){
//     contadorqudrado++
//     let quadrado = contadorqudrado*contadorqudrado
//     console.log(contadorqudrado + ":" + quadrado)
// }

//exercicio 2
// let contador = 10
// while(contador >= 1){
//     console.log(contador)
//     contador--
// }

//exercicio 3    
// let contador = 0
// let soma = 0
// while(contador < 100) {
//    contador++
//    soma = soma + contador
//    console.log(soma)
// }

//exercicio 4 e 5
// let numero = Number(prompt("digite o número"))
// let resultado
// let contador = 0
// while(contador <= 10){
//     resultado = numero*contador
//     contador++
//     console.log(resultado)
// }

// exercicio 6              //o % pega o resto de uma divisão.
// let i = 0               //se um número for divisivel por 2, ele é par.
// while(i < 20){          // se um número não for divisivel por 2 , ele é impar.
//     i++                 // para um número ser divisivel por outro número, o resto tem que ser igual a 0.   
//     if(i%2 != 0){
//     console.log(i)
//     }
    
// }

//execicio 7
// let contador = 0
// while(contador < 10){
//     contador ++
//     console.log(contador)
    
// }
// let contador = 10
// while(contador >= 1){
//     console.log(contador)
//     contador --
// }

//exercicio 8     // n*(n-1)
let i = 0
let numero = Number(prompt("digite o número"))
let fatorial = 1
while(i < numero){
   i++
   fatorial = fatorial *i
   console.log(fatorial)
}



//exercicio 9
// let contador = 0
// while(contador < 100){
//     contador ++

//     if(contador % 3 == 0){console.log("Fizz")}
//     console.log(contador)
// }








// i%3 == 0
// i%5 == 0