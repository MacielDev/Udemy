// Calculando a potencia de um número sem utilizar a classe Math e o método pow(BASE, EXPOENTE)

function calculaPotenciaNaRaca(bas, exp) {
    let resultado = 1
    for (let i = 0; i == exp; i++) {
        if (bas != 0 && exp == 0) {
            return resultado
        }
        resultado = resultado * bas
    }
    return resultado
}

console.log(calculaPotenciaNaRaca(2, 1))