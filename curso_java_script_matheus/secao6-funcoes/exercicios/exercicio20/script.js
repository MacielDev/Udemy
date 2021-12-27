function verificaAutoEscola(idade) {
    if (idade >= 18) {
        console.log("Pode se matricular na auto escola")
        return
    }
    console.log(`Você ainda não pode se matricular na auto escola, pois sua idade é ${idade}`)
}

//Executando para idade =18
console.log("Para uma idade igual a  18 anos")
verificaAutoEscola(18)

//Executando para idade =19
console.log("Para uma idade maior de 18 anos")
verificaAutoEscola(19)

//Executando para idade =15
console.log("Para uma idade menor que 18 anos")
verificaAutoEscola(15)