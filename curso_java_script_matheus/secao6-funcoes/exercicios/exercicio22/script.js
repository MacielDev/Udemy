// Calculo de  módulo de um número 

function devolveSemprePositivo(numero) {
    if (numero >= 0) {
        return console.log(numero)
    }
    let numeroPositivo = -1 * numero
    return console.log(numeroPositivo)
}

//testes

console.log("Utilizando a função devolveSemprePositivo")
devolveSemprePositivo(10)
devolveSemprePositivo(-10)

// utilizando a classe Math do JavaScript e o método abs(numero) que calcula o valor absoluto (Módulo de um número real) --- reinventando a roda kkk

console.log("Utilizando a classe Math do JavaScript")

function moduloDeUmNumero(numero) {
    return console.log(Math.abs(numero))
}
moduloDeUmNumero(2)
moduloDeUmNumero(-4)