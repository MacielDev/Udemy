let nomes = ["André", "Fernanda", "Ivani"]

// Método push => utilizado para inserir um elemento em um array de

console.log("Array inicial")
for (let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}

console.log("Utilizando push para acrescentar novos nomes")
nomes.push("Aline")
nomes.push("Iara")

for (let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}

console.log("Utilizando pop para retirar nomes do array")


//Método pop => utilizado para retirar um elemento de um array
nomes.pop()
nomes.pop()

for (let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}