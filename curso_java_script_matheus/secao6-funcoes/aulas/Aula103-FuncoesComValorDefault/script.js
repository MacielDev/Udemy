//Exemplo 1
function repetirFrase (frase,n=2){
    for(let x = 1; x<= n;x++){
        console.log(`${frase} vez ${x}`)
    }
}

repetirFrase("sem passar a quantidade de vezes")

repetirFrase("Falando a quantidade de vezes", 4)

function calculaPotencia(base, exp){
    if(exp != undefined){
        return Math.pow(base,exp)
    }else{
        return Math.pow(base,2)
    }
}

console.log(`O resultado da potencia é igual a ${calculaPotencia(3)}`)

console.log(`O resultado da potencia é igual a ${calculaPotencia(4,3)}`)