function numeroAleatorio(num){
    let maior = 0
    for(let i=0;i<=num;i++){
        let valor = Math.floor(Math.random(num) * num)+1
        if(valor > maior){
            maior = valor
        }
        console.log(valor)
    }
    return console.log(`O maior valor encontrado é ${maior}`)
}

numeroAleatorio(6)


