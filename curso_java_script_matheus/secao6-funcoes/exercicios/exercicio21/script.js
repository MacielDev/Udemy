function identificadorDeTipo(dadoPassado) {
    let tipoDeDado = typeof(dadoPassado)
    switch (tipoDeDado) {
        case 'string':
            return console.log("Você informou uma String")
        case 'number':
            return console.log("Você informou um Number")
        case 'boolean':
            return console.log("Você informou um Boolean")
    }
}

//testes iniciais
identificadorDeTipo(20)
identificadorDeTipo("Andre")
identificadorDeTipo(true)
identificadorDeTipo(false)

//curiosidade
identificadorDeTipo("4")
identificadorDeTipo("true")