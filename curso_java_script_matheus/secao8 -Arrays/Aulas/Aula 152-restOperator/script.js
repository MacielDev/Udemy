// Rest Operator => é uma implementação que permite que uma função receba uma quantidade indefinidas de argumentos

let n1 = 1
let n2 = 2
let n3 = 3
let n4 = 4
let n5 = 5

function imprimirNumeros(...numeros) {
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

console.log("recebendo somente um parâmetro")
imprimirNumeros(n1)

console.log("recebendo somente dois parâmetro")
imprimirNumeros(n1, n2)

console.log("recebendo somente três parâmetro")
imprimirNumeros(n1, n2, n3)

console.log("recebendo somente quatro parâmetro")
imprimirNumeros(n1, n2, n3, n4)