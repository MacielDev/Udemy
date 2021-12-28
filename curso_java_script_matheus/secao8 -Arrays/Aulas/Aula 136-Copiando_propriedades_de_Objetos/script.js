let carro = {
    portas: 2,
    portaMalas: "200 litros",
    motor: "2.0"
}

let adicionais = {
    tetoSolar: "true",
    rodasLigaLeve: "true"
}

// Copiando as propriedades do objeto adicionais
Object.assign(carro, adicionais)

//Observando o Objeto carro, agora com as propriedades do Objeto adicionais copiados

console.log(carro)