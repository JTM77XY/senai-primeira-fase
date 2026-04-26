let bombas=7, shows, valorbomba
let quantidadebomba, custodabomba

shows = Number(prompt("quantos shows serão feitos:"))
valorbomba = Number(prompt("quanto custa cada bomba:"))

quantidadebomba = shows*7
console. log("serão necessárias: " + quantidadebomba + " bombas")

custodabomba = quantidadebomba*valorbomba
console. log("serão necessários " + "R$" + custodabomba + " para comprar as bombas")
