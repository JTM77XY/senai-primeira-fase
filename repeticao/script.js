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

//exercicio 8     
// let i = 0
// let numero = Number(prompt("digite o número"))
// let fatorial = 1
// while(i < numero){
//    i++
//    fatorial = fatorial *i
//    console.log(fatorial)
// }
// let fatorial = 1
// let i = Number(prompt("digite o número"))
// while(i >= 1){
//    fatorial = fatorial * i
//    i--
//    console.log(fatorial)

// }
// console.log(fatorial)



// exercicio 9
// let contador = 0
// while(contador < 100){
//     contador ++

//     if(contador % 3 == 0){console.log(contador +"Fizz")} // se o resto da divisão de contador por três redultar em 0, vai mostrar no console.log a resposta.
//     if(contador % 5 == 0){console.log(contador + "buzz")}
//     if(contador % 3 == 0 && contador % 5 == 0){console.log( contador+"FizzBuzz")}
//     // console.log(contador)
    
// }
//  console.log(contador)

 //exercicio 10
//  let serie = 0
//  let i = 1
//  while(i <= 10){
//    serie = serie + 1 / i
//  i++
//  }
// console.log(serie.toFixed(6))

//exercicio 11
// let numero = Number(prompt("digite o número"))
// i = 0
// while(i< numero){
//     i++
//     if(i % 2 == 0){console.log(i + "par")}else{console.log(i + "impar")}
//     // console.log(i)
// }



//PARTE 2

//exer 01
// let palavra = prompt('digite uma palavra:')
// for(let i = 0; i < 10; i++){ 
//    console.log(palavra)
//    document.getElementById('total').innerHTML += ` ${palavra} `    
// }

//exer 02
// let numero = Number(prompt('digite um número:'))
// let soma = 0
// for(let i = 2; i <= numero; i+=2){
//  soma = soma + i
// }
// console.log(soma)

//exer 03
//  let lista 
// for(let i = 10; i > 0; i--){
//    lista = prompt('digite um item:')
//    console.log(lista)
//    document.getElementById('total').innerHTML += ` ${lista} `
// }

//exer 04
let numero = Number(prompt('informe um número'))

for(let i = numero; i > 0 ; i--){ 
   if(i % 2 != 0){
   console.log(i+'é impar')
  }

}

//exer 05
// let asteriscos = ''
// for(let i = 1; i <= 5; i++){
//   asteriscos += '*'
//   console.log(asteriscos)
// }