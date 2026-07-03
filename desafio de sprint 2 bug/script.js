function relatorio(){
    let sprint = Number(prompt('quantos dias teve a sprint?')) 
    let total = 0 // variavel para somar os bugs.
    let media // variavel para o calculo da media dos bugs.
    let ListaBug = [] // mostra uma lista com os bugs que foram informados em cada dia. serve só para mostrar os bugs separadamente em uma lista.

    for(let i = 1; i <= sprint; i++){
     let bugs = Number(prompt(`quantos bugs foram encontrados no dia ${i}?`))
     ListaBug.push(bugs)// pega o valor da variavel bugs e joga dentro do array ListaBug.
     total = total + bugs
     document.getElementById('bug').innerHTML += ` dia ${i}: ${bugs} bug(s).`
    }

    let maior = Math.max(...ListaBug) //mostra o maior número dentre os números da ListaBug.
    let menor = Math.min(...ListaBug) //mostra o menor número dentre os números da ListaBug.
    let diamaior, diamenor;

    diamaior = ListaBug.indexOf(maior) + 1 // pega a posição do maior número da ListaBug.
    diamenor = ListaBug.indexOf(menor) + 1 // pega a posição do menor número da ListaBug.

    document.getElementById('bug').innerHTML += ` total de bugs: ${total}.`
    media = total/sprint
    document.getElementById('bug').innerHTML += ` media de bugs: ${media}.`
    document.getElementById('bug').innerHTML += ` maior quantidade de bugs: ${maior}.`
    document.getElementById('bug').innerHTML += ` menor quantidade de bugs: ${menor}.`
    
    console.log('dia com menos bugs: '+ diamenor)
    console.log( 'dia com mais bugs: '+diamaior)     
}



//indexOf()

//criar duas variaveis número menor e número maior.
// criar um if dentro do for.
// se for dia 1, essas variaveis vão receber o valor da variavel bugs.

// tamanho do array igual a do contador