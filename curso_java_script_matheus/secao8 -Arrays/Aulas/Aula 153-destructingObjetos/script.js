// destructuring de Objetos
const pessoa = {
        nome: 'Andre',
        idade: '36 anos',
        profissao: 'programador'
    }
    //transforma os atributos do objeto pessoa em constantes nesse caso (const) , poderíamos ter transformado em variáveis (let)

const { nome: campo1, idade: campo2, profissao: campo3 } = pessoa

//Utilizando o destructuring para converter os atributos em constantes 

console.log("Acessando os valores dos atributos por meio das constantes obtidas pelo destructuring")

console.log(campo1)
console.log(campo2)
console.log(campo3)

//Poderíamos ainda ter acessado os valores dos atributos do objeto diretamente, porém percebam que a sintaxe fica um pouco mais extensa no que diz respeito ao acesso ás informações

console.log("valor dos atributos acessados diretamente através do Objeto ")

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)