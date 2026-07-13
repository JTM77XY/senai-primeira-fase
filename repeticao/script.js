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
// let numero = Number(prompt('informe um número'))

// for(let i = numero; i > 0 ; i--){ 
//    if(i % 2 != 0){   //vai testar se a divisão vai dar resto igual a 1. se o i for número impar, vai passar na condição se não for, não passa.
//    console.log(i+'é impar')
//   }

// }

//exer 05
// let asteriscos = ''
// for(let i = 1; i <= 5; i++){
//   asteriscos += '*'
//   console.log(asteriscos)
// }

//exer 06
// let numerosorteado = Math.floor(Math.random() * 100)
// console.log(numerosorteado)
// let tentativas = 0
// let botao = document.getElementById('clique')
// botao.addEventListener("click", () => {
//     tentativas++
//     console.log(tentativas)
// })

// function sorteio(){
//  let palpite = Number(document.getElementById('valor').value)
//  if(palpite == numerosorteado){
//   document.getElementById('total').innerHTML = `voçe acertou o número sorteado ${numerosorteado}`
//  }else if(palpite > numerosorteado){
//   document.getElementById('total').innerHTML = `o número sorteado é menor que ${palpite}`
//  }else if(palpite < numerosorteado){
//   // console.log
//     document.getElementById('total').innerHTML = `o número sorteado é maior que ${palpite}`
//  }

// }


// // O computador sorteia um número de 1 a 100
// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let tentativas = 0;
// let palpite = 0;

// // Loop de repetição para continuar perguntando até acertar
// while (palpite !== numeroSecreto) {
//     palpite = parseInt(prompt("Tente adivinhar um número entre 1 e 100:"));
//     tentativas++; // Incrementa o número de tentativas

//     if (palpite === numeroSecreto) {
//         alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
//     } else if (palpite > numeroSecreto) {
//         alert("O seu palpite é muito alto! Tente um número menor.");
//     } else if (palpite < numeroSecreto) {
//         alert("O seu palpite é muito baixo! Tente um número maior.");
//     } else {
//         alert("Por favor, digite um número válido.");
//         tentativas--; // Não conta tentativas inválidas
//     }
// }
// console.log(tentativas)



//PARTE 3
//exer 7.7
// let i = 0
// while(i < 250){
//   console.log('MANHÊ, ACABEI O PRIMEIRO')
//   console.log(i)
//   i++
//   //  console.log(i)
// }

// let i = 100
// while(i > 0){
//   i = i - 5
//   console.log(i)
// }

//exer 7.13
// let numero2 = 50
// for(let numero = 1; numero < numero2; numero++){
//   if(numero % 2 == 0){
//     console.log(numero)
//   }
// }

// let numero2 = 1
// for(let numero = 50; numero > numero2; numero--){
//   if(numero % 2 == 0){
//     console.log(numero)
//   }
// }

//PARTE DO EXERCICIOVERSO
// enzo e valentina
// let altura1 = 1.50
// let altura2 = 1.40
// let i 
// for( i = 0; altura2 <= altura1; i++){
//     altura1 += 0.02
//     altura2 += 0.03
// }
// console.log(altura1)
// console.log(altura2)
// console.log(`${i} anos`)

// let altura1 = 1.50
// let altura2 = 1.40
// let i = 0
// while(altura2 <= altura1){
//    altura1 += 0.02
//    altura2 += 0.03 
//    i++

// }
// console.log(altura1)
// console.log(altura2)
// console.log(`${i} anos`) 

// meia meia
// let aumento
// for(let i = 0; i< 3; i++){
//   let salario = Number(prompt("digite o salário:"))
//    aumento = salario + (salario * 10) / 100
//    console.log(`salário: ${salario}. salário com aumento: ${aumento}`)
// }


//MJ E A SAGA DO XEROX
// exer 76
//  let s = Number(prompt('digite um número:'))
// for(let i = 1; i <= 10; i++){
//      let total = s*i
//     console.log(total)
// }

//exer 75
// let c = 0
// for(let i = 0; i < 500; i++){
//     c = c + 0.33
//     // console.log(c)
// }

// console.log(c)



