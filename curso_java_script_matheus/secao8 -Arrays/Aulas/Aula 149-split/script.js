// Método split - quebra um string por meio de um separador passado e retorna um array formado por cada uma das partes obtidas na separação

let perfilCliente = "Andre, 36 anos, casado , programador"

let dadosCliente = perfilCliente.split(",");

//mostrando o array como um todo
console.log(dadosCliente)

// percorrendo cada elemento do array com foreach
dadosCliente.forEach(dado => {
    console.log(dado)
})

//Atribuindo sentido às informações
for (let i = 0; i < dadosCliente.length; i++) {
    switch (i >= 0) {
        case i === 0:
            {
                let nome = dadosCliente[i]
                console.log(`nome : ${dadosCliente[i]}`)
                break
            }

        case i === 1:
            {
                let idade = dadosCliente[i]
                console.log(`idade:${dadosCliente[i]}`)
                break
            }
        case i === 2:
            {
                let estadoCivil = dadosCliente[i]
                console.log(`estado civil:${dadosCliente[i]}`)
                break
            }
        case i === 3:
            {
                let profissao = dadosCliente[i]
                console.log(`profissao:${dadosCliente[i]}`)
                break
            }
    }
}