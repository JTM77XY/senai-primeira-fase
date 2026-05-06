let clt, estagiario, pj
let total

clt = Number(prompt("número de clt:"))
estagiario = Number(prompt("número de estagiarios:"))
pj = Number(prompt("númmmero de pj:"))

total = clt + estagiario + pj
console. log("total de devs:" + total)

if(clt == total*0.5){
  console.log("metade dos devs são clt.")  
}else{
    console.log("metade dos devs não são clt.")
}