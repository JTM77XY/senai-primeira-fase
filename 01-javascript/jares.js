let numerocaminhoes, jarescaminhao=50, caminhaocobranca=450, jare=90
let lucro

numerocaminhoes = Number(prompt("informe o número de caminhões:"))

lucro = numerocaminhoes*jarescaminhao*jare-numerocaminhoes*caminhaocobranca
console. log("lucro da temporada é: " + "R$" + lucro)