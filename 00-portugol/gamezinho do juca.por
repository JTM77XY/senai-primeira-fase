programa {
  funcao inicio() {
  inteiro potuacao
  escreva("digite a pontuação:")
  leia(potuacao)

  se(potuacao<=10){
    escreva("deu ruim.")
    escreva(" tá, tem que melhorar")
  }senao{
    se(potuacao>10 e potuacao<=100){
      escreva("supimpa!")
    }senao{
      se(potuacao>100 e potuacao<=200){
        escreva("mitou!")
      }senao{
        escreva("lenda")
      }
    }
  }  
  }
}
