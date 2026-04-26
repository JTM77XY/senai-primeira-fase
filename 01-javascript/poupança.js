let moradia, água, luz, internet, gasolina, streamings, telefone, outros 
let salário, restante

salário = Number(prompt("salário:"))
moradia = Number(prompt("custo da moradia:"))
água = Number(prompt("custo da água:"))
luz = Number(prompt("custo da luz:"))
internet = Number(prompt("custo da internet:"))
gasolina = Number(prompt("custo da gasolina:"))
streamings = Number(prompt("custo dos streamings:"))
telefone = Number(prompt("custo do telefone:"))
outros = Number(prompt("outros:"))

restante = salário-moradia-água-luz-internet-gasolina-streamings-telefone-outros
console. log("salário restante é: " + "R$" + restante)