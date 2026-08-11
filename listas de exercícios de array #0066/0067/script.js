// EXERCÍCIO 01, 02
// let semana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']
// let semana2 = []
// for(let i = 6; i >= 0; i--){
//     semana2.push(semana[i])
// }
// // semana.reverse()
// console.log(semana)
// console.log(semana2)

//EXERCÍCIO 03
// let semana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']
// semana.push('feriado') //adiciona um elemento dentro do array semana.
// console.log(semana)

//EXERCÍCIO 04
// let semana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']
// semana.pop() //remove o último elemento do array semana.
// console.log(semana)

//EXERCÍCIO 05
// let numerospares = [2,4,6,8,10,12,14,16,18,20]
// console.log(numerospares)

//EXERCÍCIO 06
// let numerospares = [2,4,6,8,10,12,14,16,18,20]
// let total = numerospares[2] = 12 // substitui o terceiro elemento do array numerospares por 12
// console.log(numerospares)

//EXERCÍCIO 07
// let frutas = ['banana','maçã','uva']
// frutas.push('morango') //adiciona o elemento morango no array frutas.
// console.log(frutas)

//EXERCÍCIO 08
// let frutas = ['banana','uva','morango']
//     frutas.splice(1,1) //posição que vai ser removida, qauntos elementos vão ser removidos apartir dessa posição. é o que o operador splice faz.
//     console.log(frutas)


//EXERCÍCIOS 09, 10, 11 ,12 ,13
// amigos.push(nomes) // coloca o array nomes dentro do array amigos.
// let amigos = ['alice','bob','charlie']
// console.log(amigos)
// let nomes = ['dave','eva','frank']
// console.log(nomes)
// let amigosnomes = amigos.concat(nomes) // o operador concat junta dois array em um array.
// console.log(amigosnomes)

// idades = [25,30,28,22,26,24]
// console.log(idades)
// let media = 0
// for(let i = 0; i < amigosnomes.length; i++){
//     console.log('idade de '+amigosnomes[i]+' é '+idades[i])
//      media = media + idades[i] 
// }
//  media = media / idades.length
//  console.log('média das idades é: ' + media)
//  let total = idades[0] + idades[1]
//  console.log('soma das idades de alice e bob é: '+ total)

//EXERCÍCIOS 14, 15, 16, 17
// let compras = ['maçãs','pão','leite'] 
//  compras.push('ovos','arroz') //adiciona dois elementos no array compras. ['maçãs', 'pão', 'leite', 'ovos', 'arroz'] .
//  compras.splice(2,1) //retira o elemento identificado com o indice 2 e apatir desse elemento, retira um elemento que seria o proprio elemento.
//  let fruta = compras.includes('pão') // verifica se um elemento existe ou não existe dentro de um array.
//  console.log(compras)
//  console.log(fruta)
 
//EXERCÍCIO 18
// let numeroimpar = []
// // let total = 0
// for(let i = 1; i <= 9; i+=2){   // i não está sendo limitado pelo tamanho do array. i está sendo limitado pelo 9 para não escrever o sexto número impar
//    let total =  i
//     // let total = i + 2
//     numeroimpar.push(total) //jogando o valor da variavel total dentro do array
//     console.log(total) //mostrando o valor da variavel total no console
// }
// console.log(numeroimpar) // mostrando o array no console

//EXERCÍCIO 19
// let numeros = [3,6,9]
// let dobrados = [] // cria um novo array chamado dobrados e joga os números multiplicados para esse array.
// dobrados.push(numeros[0]*2) // pega um valor especifico do array numeros e multiplica por 2 antes de jogar para dentro do array dobrados.
// dobrados.push(numeros[1]*2)
// dobrados.push(numeros[2]*2)
// console.log(numeros)
// console.log(dobrados)

//exercício 20
// let cidades = ['paris','londres','nova york']
// console.log(`eu vou primeiro para ${cidades[1]}, depois para ${cidades[0]}, depois para ${cidades[2]}. `)

