let nc
let chance

nc = Number(prompt("informe o número de vezes ao celular:"))

chance = (0.1/(1+500*nc))*100
console. log(chance.toFixed(4) + "%")