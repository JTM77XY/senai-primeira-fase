

// const maximas =[]
// const minimas =[]

// function gerartemperaturas(){
//   for(let i = 0; i < 30; i++){
//     let n1 = Math.floor(Math.random()*23) + 12
//     let n2 = Math.floor(Math.random()*23) + 12
//     if(n1 > 12 && n2 > 12){
//       if(n1 < n2){
//         minimas.push(n1)
//       }

//       if(n2 > n1){
//         maximas.push(n2)
//       }
      
//     }
//     // minimas.push(n1)
//   }
//   console.log(minimas)
//   console.log(maximas)
// }



//8.2
// let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(valores)
// let invertido = valores.reverse()
// console.log(invertido)

//8.3
let posicao = []
for(let i = 0; i<25; i++){
 let aleatorio = Math.floor(Math.random()*10)
 posicao.push(aleatorio)
}
console.log(posicao)