// window.document.write(window.document.characterSet)

let p1 = window.document.getElementsByTagName('p')[0] //getElementsByTagName serve para celecionar uma tag do html. //[] serve para escolher a tag especifica caso tenha varias tags iguais
window.document.write(p1.innerText) //window.document.write(p1.innerText) estou dizendo para escrever dentro da minha pagina html o conteúdo que está dentro da tag p . //innertext é o texto que está dentro da tag p, também pode ser innerhtml.
// p1.innerHTML = 'oi'
p1.style.color = 'blue' // estou pegando a tag p que eu escolhi armazenar na variavel p1 e mudando a cor
// window.alert(p1.innerText)

let corpo = window.document.body
corpo.style.background = 'black'
// window.alert(corpo.innerHTML)


// window.document.getElementById('msg').innerHTML = "estou aguardando" // substitui o ID que está na página pela frase.
let d = window.document.getElementById('msg') 
d.innerHTML = "estou aguardando" // também substitui  p ID pela frase, mas usando essa forma com variavel você pode aplicar style e alterar a cor do ID ou a cor do do texto
d.style.background = 'green'







//seleção por marca: document.getElementsByTagName('tag')
//seleção por id: document.getElementById('id')
//seleção por name: document.getElementsByName('name')
//seleção por class: document.getElementsByClassName('class')
