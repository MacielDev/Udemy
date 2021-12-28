//Exibindo os elementos de um array diretamente no console.log()
let sequenciaNumerica = [1, 2, 3, 4]
console.log(sequenciaNumerica)

//Acessando cada posição do arry utilizando um laço for comum
for (let i = 0; i <= sequenciaNumerica.length; i++) {
    console.log(sequenciaNumerica[i])
}

// percorrendo cada elemento de um array com forEach e exibindo seus valores no console.log
let arrayNomes = ["André", "Aline", "Fernanda"]

arrayNomes.forEach(function(nome) {
    console.log(nome)
})