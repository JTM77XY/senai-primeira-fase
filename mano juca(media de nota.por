programa {
  funcao inicio() {
   real nota1
   real nota2
   real soma
   real media
   escreva("digite  a primeira nota:")
   leia(nota1) 
   escreva("digite a segunda nota:")
   leia(nota2)
   soma= nota1+nota2
   media=soma/2
   se(media>7){
    escreva("ele passou")
   }senao{
    se(media<7){
      escreva("ele reprovou")
    }
   }
   

  }
}
