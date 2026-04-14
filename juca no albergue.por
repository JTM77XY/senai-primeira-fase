programa {
  funcao inicio() {
  real valortotal, valordiaria, desconto10
  real desconto15, multa=150, valorbruto
  inteiro dias
  escreva("quantos dias:")
  leia(dias)
  se(dias<=5){
    valordiaria=100
  }senao{
    se(dias>=6 e dias<=10){
      valordiaria=90
    }senao{
      valordiaria=80
    }
  }
  valorbruto= dias*valordiaria
  desconto10=valorbruto*0.1
  desconto15= valorbruto*0.15
  valortotal= valorbruto-desconto10-desconto15+multa
  escreva("valor bruto: R$" + valorbruto)
  escreva("\ndesconto 1: R$" + desconto10)
  escreva("\ndesconto2: R$" +desconto15)
  escreva("\nmulta: R$" + multa)
  escreva("total a pagar: R$" + valortotal)

  }
}
