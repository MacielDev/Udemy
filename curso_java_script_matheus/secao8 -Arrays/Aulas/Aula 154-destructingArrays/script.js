// Destructing em Arrays => Consiste em uma técnica de atribuir os valores de um array diretamente a variáveis 

//EXEMPLO 1 - DESTRUCTIN EM ARRAY

console.log("Exemplo 1")

const nomes = ["Andre", "Fernanda", "Ivani"]
const [cliente1, cliente2, cliente3] = nomes

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)


//EXEMPLO 2

console.log("Exemplo2")
const clienteDados = "André;36anos;casado;programador"

const cliente = clienteDados.split(";")
console.log(cliente)

const [nomeCli, idade, estadoCivil, profissao] = cliente

console.log(`nome: ${nomeCli}`)
console.log(`idade:${idade}`)
console.log(`estado civil:${estadoCivil}`)
console.log(`profissão:${profissao}`)