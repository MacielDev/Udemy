function imprimirConsole(){
    console.log('Testando primeira')
}

imprimirConsole()

let nome
let idade

function pegarDados(){
    nome = window.prompt('Informe seu nome:')
    idade = window.prompt('Informe sua idade:')
}

function relatorio(){
    if(nome != null && idade != null){
        console.log(`Seu nome é ${nome}`)
        console.log(`Sua idade é ${idade}`)
    }else{
        console.log('Você precisa informar seus dados')
    }
}

function calcularIPVA(valorVeiculo){
    let imposto =valorVeiculo* 0.04;
    return imposto
}

let impostoDevido = calcularIPVA(50000)
console.log(`Você deverá pagar R$ ${impostoDevido},00  de IPVA`)Andreas

pegarDados()
relatorio()
