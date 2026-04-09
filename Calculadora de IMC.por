programa {
  funcao inicio() {
  real peso
  real altura
  real imc
  escreva("peso:")
  leia(peso)
  escreva("altura:")
  leia(altura)

  imc=peso/altura*altura
  

  se(imc <25){
    escreva("está abaixo de 25")
  }senao{
    escreva("está acima de 25")
  }  
  }
}
