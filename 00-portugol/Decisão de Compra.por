programa {
  funcao inicio() {
  real item
  real saldo
  escreva("preço do item:")  
  leia(item)
  escreva("qual e seu saldo:")
  leia(saldo)

  se(item< saldo){
    escreva("a compra pode ser efetuada")
  }senao{
    escreva("saldo insuficiente")
  }
  }
}
