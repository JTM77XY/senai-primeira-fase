programa {
  funcao inicio() {
  inteiro caminhao
  inteiro numerojares=50
  real jarevendido=90.00
  real cobranca=450
  real lucro
  escreva("digite o numero de caminhoes:")
  leia(caminhao)
  
  lucro = caminhao*numerojares*jarevendido-3*cobranca
  escreva("lucro da temporada sera R$" + lucro)
    
  }
}
