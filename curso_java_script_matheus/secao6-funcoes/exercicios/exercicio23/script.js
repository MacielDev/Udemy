function verificaLimiteString(stringInformada) {
    if (stringInformada.length > 10) {
        return console.log("Texto muito longo");
    }
    console.log("Texto dentro do limite esperado")
}

//teste passando uma string com mais de 10 caracteres
console.log("Passando uma string com mais de 10 caracteres")
verificaLimiteString("onomatopeia")

//teste passando uma string com menos de 10 caracteres
console.log("Passando uma string com menos de 10 caracteres")
verificaLimiteString("ola")