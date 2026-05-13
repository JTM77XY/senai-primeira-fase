let numerocaminhoes, jarescaminhao=50, caminhaocobranca=450, jare=90, NcaminhaoTemporadaP
let lucro

numerocaminhoes = Number(prompt("informe o número de caminhões:"))
NcaminhaoTemporadaP = Number(prompt("quantos caminhões de jarés foram vendidos na temporada passada:"))

lucro = numerocaminhoes*jarescaminhao*jare-numerocaminhoes*caminhaocobranca
console. log("lucro da temporada é: " + "R$" + lucro)

if(numerocaminhoes > NcaminhaoTemporadaP){
    console.log("quantidade de caminhões aumentou.")
}else if(NcaminhaoTemporadaP > numerocaminhoes){
    console.log("quantidade de caminhões diminuiu.")
}else{console.log("quantidade de caminhões se manteve a mesma.")}
