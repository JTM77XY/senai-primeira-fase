function relatorio(){
    let sprint = Number(prompt('quantos dias teve a sprint?'))
    let total = 0
    let media
    
    for(let i = 1; i <= sprint; i++){
     let bugs = Number(prompt(`quantos bugs foram encontrados no dia ${i}?`))
     total = total + bugs
     document.getElementById('bug').innerHTML += ` dia ${i}: ${bugs} bug(s)`
    }
    document.getElementById('bug').innerHTML += ` total de bugs: ${total}`
    media = total/sprint
    document.getElementById('bug').innerHTML += ` media de bugs: ${media}` 
}

//criar duas variaveis número menor e número maior.
// criar um if dentro do for.
// se for dia 1, essas variaveis vão receber o valor da variavel bugs.