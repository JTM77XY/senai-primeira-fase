
let joguinho
function jogo(){ //inicio da função
joguinho = prompt(`# 01: Primeiro convite: Tias Fofinhas

Roque já tem a Jota Qwert confirmada e vai atrás da possível segunda atração do Rock in Reels. 

Visitando suas amigas da Tias Fofinhas (uma banda cover de Tear for Fears), fez o convite e ouviu suas exigências: 50 toalhas de crochê no camarim.

Roque então se viu em um dilema: nem camarim o evento tem, elas vão tocar pela internet. Quanto mais 50 toalhas de crochê.

Roque deve falar a verdade ou mentir que tem camarim e as toalhas.

- Verdade: 02
- Mentir: 03`)

if(joguinho == 2){ //inicio do primeiro if da combinação if e else
    joguinho = prompt(`# 02: Verdade; Yasmina

Roque contou para  as Tias Fofinhas que o evento ainda está engatinhando e não temos camarins ou mesmo verba para comprar toalhas de crochê, infelizmente.

Elas ficaram tristes pela dura realidade dos músicos, mas apreciaram a sinceridade. Prometeram levar suas próprias toalhas e ainda passaram o contato do grupo de rap dos netos de uma amiga delas. Elas já viram Yasmina e os Manos se apresentando no aniversário da avó deles e acharam muito talentosos e carismáticos, além de muito conectados. Pode ser uma boa adição para este evento.

Roque foi falar com eles, Yasmina pediu que o grupo fosse marcado em todas as fotos postadas de divulgação do evento, assim eles poderiam atrair seu público para o evento.

Roque deve aceitar ou rejeitar essa exigência?

- Aceitar: 04
- Rejeitar: 05`)
if(joguinho == 4){
  joguinho = prompt(`# Aceitar Yasmina; HT

Roque aceita e marca Yasmina e os Manos em todas as postagens e o efeito é assustadoramente bom! O evento viraliza e todo mundo fica sabendo. Muita audiência, mas muita responsabilidade!

Com todo essa promessa de sucesso, ofertas de parceria e patrocínios apareceram. Bandas também.

Uma desconhecida banda chamada Horrível Trio se ofereceu para tocar. As músicas deles são muito relaxantes e Roque ficou receoso que colocasse o público para dormir.

Roque deve aceitar Horrível Trio?

- Sim: 08
- Não: 09`)
if(joguinho == 8){
    joguinho = prompt(`# 08: Aceita HT; amazonia

Roque decide arriscar aceitando a desconhecida banda Horrível Trio e o resultado foi maravilhoso. A música é realmente relaxante mas não tediosa e os músicos são muito virtuosos!

Coincidentemente, Jeferson Bezerra, CEO da big tech amazonia, é muito fã do Horrível Trio e adorou o evento. Gostou tanto que fez uma proposta para reprisar o evento na rede social que ele está lançando. A proposta é financeiramente muito boa, mas Bezerra tem medo de ter problemas de direitos autorais com as bandas cover tocando músicas de outras bandas e pede para elas não aparecerem.

Roque deve aceitar a proposta, cortando Jota Qwert e Tias Fofinhas?

- Sim: 10
- Não: 11`)
if(joguinho == 10){
    joguinho = prompt(`# Corta covers

O corte de duas das bandas originais do festival cria uma onda de revoltas entre os fãs e o festival sobre um enorme cancelamento. Depois dessa repercussão fortemente negativa ninguém mais quer ter seu nome atrelado ao evento e ele nunca mais volta a acontecer.

FIM.`)
}else{
    if(joguinho = 11){
        joguinho = prompt(`# 11: Mantém covers

Roque nega a proposta da amazonia porque não quer virar as costas para quem esteve junto com ele desde o começo! Jeferson Bezerra então resolve usar sua influência e ‘consegue’ a liberação para exibição das músicas das bandas cover.

A veiculação do festival na nova rede social acontece tanto completa como em partes e shorts, tudo vira um grande sucesso e os contatos para uma nova edição já estão fervendo!

Fim.`)
    }
}

}else{
    if(joguinho == 9){
        joguinho = prompt(`# 09: Rejeita HT

Roque resolve não arriscar e não inclui a Horrível Trio no evento. O evento tem alguma relavância por conta do alcance e engajamento das redes de Yasmina mas nunca decola completamente. Dada a repercussão obtida com o público nichado o evento vai virar um festival de Rap na próxima edição, mas mantendo o mesmo nome.

FIM.`)
    }
}

}else{
  if(joguinho == 5){
    joguinho = prompt(`# 05: Rejeitar Yasmina

Roque não entende a intenção de Yasmina, fica receoso e acaba rejeitando a proposta. Por conta desta decisão o Rock in Reels não viraliza. Acontece, duas boas bandas tocam, mas o evento nunca explode para o sucesso que poderia ter sido.

Fim.`)
  }
}

// fim do primeiro if
}else{ //inicio do else da primeira combinação de if e else
    if(joguinho == 3){ //começo do if 01 dentro do else
    joguinho = prompt(`# 03: Mentir; Lucio Fernando

Roque mente para as Tias Fofinhas que tem as toalhas. Elas perguntam de que cor são, ele diz que são brancas (afinal todas as toalhas de crochê são brancas, não é?). Elas complementam que suas toalhas tem que ser pretas. Eles gagueja, diz que se enganou e que elas são pretas.

Elas desconfiam dele, fazem pressão para ver as toalhas e ele acaba reconhecendo que mentiu. Elas ficam muito decepcionadas e desistem de participar. Ao saber disso, a banda Jota Qwert também pula fora do barco.

Ao ver Roque abatido com o iminente fracasso, seu pai, Lucio Fernando, oferece a Roque o estúdio e o salão da associação dos funcionários da sua fábrica, a Meia Meia Meia, para realizar o evento. Assinando um contrato ele também teria disponível o dinheiro necessário para trazer as bandas que quisesse.

Roque nunca deixou o dinheiro e a influência de seu pai interferir em sua carreira artística e se sentiu incomodado com a proposta. Ao mesmo tempo, ficou balançado porque esse contrato seria a chance de realizar o maior sonho da sua vida!

Roque deve assinar o contrato?
- Sim: 07
- Não: 06`)
if(joguinho == 7){
    joguinho = prompt(`# 07: Aceitar o contrato

Roque coloca o orgulho de lado e se dobra à proposta de seu pai, assina o contrato e consegue o financiamento para a realização do evento. O festival atinge um sucesso gigantesco, porém somente no submundo da música.

Fim.`)
}else{
    if(joguinho == 6){
        joguinho = prompt(`# 06: Não assinar o contrato

Roque lutou a vida inteira, tocando músicas que não gostava para poder alcançar seu próprio sucesso sem que ninguém pudesse jogar em sua cara que ele só chegou lá por causa do seu pai.

Ele não vai jogar tudo isso fora agora. Nem passou pela cabeça dele aceitar esse contrato.

Não tem bandas, não tem dinheiro, não tem festival.

Ele resolve fazer um mini show apenas, com sua própria banda que toca sucessos do samba em ritmo de Rock, a Roda de Roque.

Enquanto se preparava para tocar, ele se sentiu muito triste por ter mentido para as Tias Fofinhas. Muito triste. Tão triste que acabou compondo uma música contando a história do que ele fez e o qual mal se sentia por isso. O refrão repetia “Perdão” incessantemente.  O nome da música é “Perdão”. 

As Tias Fofinhas assistiram a transmissão, se emocionaram com a letra e com a emoção genuína de Roque e o perdoaram. Prometeram tocar no Rock in Reels se ele quiser retomar seu projeto.

Fim.`)
    }
}
 
    }else{ //fim do if 01 dentro do else
        if(joguinho == "não sei"){
            joguinho = prompt("indeciso")
        }
    }



}// fim do else


} // fim da função

