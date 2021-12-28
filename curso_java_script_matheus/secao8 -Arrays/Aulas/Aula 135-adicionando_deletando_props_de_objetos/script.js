//Criando o Objeto pessoa
let pessoa = {
    nome: "Andre",
    idade: "36",
    profissao: "Programador",
    temCabelo: "sim"
}

console.log(pessoa)

//Deletando uma propriedade do Objeto pessoa
delete pessoa.temCabelo

console.log(pessoa)

//Adicionando uma propriedade ao Objeto pessoa

pessoa.temRugas = "Muitas"
console.log(pessoa)