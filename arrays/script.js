let idades = [18,20,12,35,14,15]
let precos = []
function array00(){
    // let idades = [18,20,12,35,14,15]
    // console.log(idades)
    // console.log(idades.length)
    // let i = 0
    // for(let i = 0; i<6;i++){
    // console.log('idade:'+ idades[i])
    // }

    for(let i = 0; i<idades.length;i++){
    console.log('idade:'+ idades[i])
    }

}

function addprecos(){
    let n = Math.ceil(Math.random() *100)
    precos.push(n)
    // console.log(precos)
    document.getElementById('lista-precos').innerHTML = ''
    for(let i = 0; i<precos.length; i++){
        console.log(precos[i])
        document.getElementById('lista-precos').innerHTML += precos[i] + '-'
    }
}

function mostrarprodutos(){
const produtos = [
  "Smartphone", "Notebook", "Smart TV", "Fone de Ouvido Bluetooth", "Cadeira Gamer",
  "Mouse Sem Fio", "Teclado Mecânico", "Monitor Ultrawide", "Impressora Multifuncional", "Tablet",
  "Caixa de Som Portátil", "Smartwatch", "Câmera Digital", "Carregador Portátil", "Roteador Wi-Fi",
  "Ventilador", "Ar-Condicionado", "Aspirador de Pó Robô", "Cafeteira Elétrica", "Liquidificador",
  "Micro-ondas", "Geladeira", "Fogão", "Máquina de Lavar", "Ferro de Passar",
  "Secador de Cabelo", "Chapinha", "Aparador de Pelos", "Escova de Dente Elétrica", "Balança Digital",
  "Tênis de Corrida", "Mochila Impermeável", "Garrafa Térmica", "Kit de Ferramentas", "Parafusadeira",
  "Furadeira", "Jogo de Panelas", "Faqueiro", "Taças de Vinho", "Fritadeira Sem Óleo",
  "Massageador Elétrico", "Umidificador de Ar", "Lâmpada Inteligente", "Fechadura Digital", "Câmera de Segurança",
  "Bicicleta Ergométrica", "Halteres", "Tapete de Yoga", "Kit de Potes de Vidro", "Guarda-Chuva"
];
for(let i = 0; i<produtos.length; i++){
    console.log(produtos[i])
    document.getElementById('lista-precos').innerHTML += `<p class="produtos">${produtos[i]}<p>`
}

}