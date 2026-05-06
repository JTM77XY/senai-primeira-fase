let laranjasIN, laranjasFN
let laranjasVD

laranjasIN = Number(prompt("quantidade inicial de laranjas:"))
laranjasFN = Number(prompt("quntidade final de laranjas:"))

laranjasVD = laranjasIN - laranjasFN
console. log(laranjasVD + " laranjas vendidas")

if(laranjasFN == 0){
    console.log("o estoque deve ser maior no próximo dia.")
}
