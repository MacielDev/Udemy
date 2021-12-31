//Mutação

let pessoa = {
    nome: "André"
}

let pessoa2 = pessoa

console.log("Imprimindo Pessoas\n")
console.log(`Pessoa:${pessoa}`)
console.log(`Pessoa2:${pessoa2}\n`)

console.log("Imprindo Comparações\n")

console.log(`São identicos?${pessoa === pessoa2}`)
console.log(`Apontam para o mesmo espaço de memória?${pessoa == pessoa2}`)