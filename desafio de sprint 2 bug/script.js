function relatorio(){
    let sprint = Number(prompt('quantos dias teve a sprint?'))
    let total = 0
    let media
    let ListaBug = []
    
    for(let i = 1; i <= sprint; i++){
      let bugs = Number(prompt(`quantos bugs foram encontrados no dia ${i}?`))
     ListaBug.push(bugs)
     total = total + bugs
     document.getElementById('bug').innerHTML += ` dia ${i}: ${bugs} bug(s).`
    }

    let maior = Math.max(...ListaBug)
    let menor = Math.min(...ListaBug)
    document.getElementById('bug').innerHTML += ` total de bugs: ${total}.`
    media = total/sprint
    document.getElementById('bug').innerHTML += ` media de bugs: ${media}.`
    document.getElementById('bug').innerHTML += ` maior quantidade de bugs: ${maior}.`
    document.getElementById('bug').innerHTML += ` menor quantidade de bugs: ${menor}.`     
}

//criar duas variaveis número menor e número maior.
// criar um if dentro do for.
// se for dia 1, essas variaveis vão receber o valor da variavel bugs.

// tamanho do array igual a do contador