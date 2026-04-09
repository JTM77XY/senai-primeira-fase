programa {
  funcao inicio() {
  real temperatura
  real fahrenheit 
  escreva("graus celsius:")
  leia(temperatura)

  fahrenheit=temperatura*1.8+32
  escreva(fahrenheit)
  escreva(" fahrenheit")
  escreva("\n")

  se(fahrenheit> 68){
    escreva("alerta de super calor!")
  }
  

  }
}
