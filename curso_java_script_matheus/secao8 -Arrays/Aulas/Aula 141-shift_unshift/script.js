let nome = ["André", "Fernanda", "Iara"]

console.log("Array inicial")

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
console.log(`O array possui ${nome.length} elementos`)

console.log("Removendo o primeiro elemento do array com o uso de shift")
    // O método shift => remove o primeiro elemento de um array de
nome.shift()

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log(`O array possui ${nome.length} elementos`)

console.log("Inserindo um elemento no inicio do array com o unshif")

// O método unshift adiciona um ou mais elementos no inicio do array
nome.unshift("Alberto")

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log(`O array possui ${nome.length} elementos`)

console.log("Inserindo mais de um elemento no inicio do array com unshift")

nome.unshift("Elson", "Miguel")

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log(`O array possui ${nome.length} elementos`)