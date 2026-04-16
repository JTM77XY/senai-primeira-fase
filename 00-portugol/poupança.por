programa {
  funcao inicio() {
  real salario
  real mo
  real agu
  real luz
  real int
  real gaso
  real stre
  real telefone
  real outros

  real sobraD
  escreva("qual o seu salario:")
  leia(salario)
  escreva("qual o valor da moradia:")
  leia(mo)
  escreva("qual o valor da agua:")
  leia(agu)
  escreva("qual o valor da luz:")
  leia(luz)
  escreva("qual o valor da internet:")
  leia(int)
  escreva("qual o valor da gasolina:")
  leia(gaso)
  escreva("qual o valor do streamings:")
  leia(stre)
  escreva("qual o valor do telefone:")
  leia(telefone)
  escreva("valor de outros gastos:")
  leia(outros)

sobraD = salario-mo-agu-luz-int-gaso-stre-telefone-outros
escreva("o valor que sobrou é R$" + sobraD)
  }
}
