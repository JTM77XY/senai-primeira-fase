



const maximas =[]
const minimas =[]

function gerartemperaturas(){
  for(let i = 0; i < 30; i++){
    let min = Math.floor(Math.random()*35)
    if(min > 12){
      minimas.push(min)
    }
    // minimas.push(min)
  }
  console.log(minimas)
}