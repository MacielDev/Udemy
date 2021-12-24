
function soma (a,b){
    if(a != undefined && b != undefined ){
       return a+b
    }
    else{
        return console.log("Informe números válidos para executar a soma")
    }
}


console.log(`O resultado da soma é : ${soma(2,3)}`)


console.log(`O resultado da soma é : ${soma(2)}`)

function saudacao (nome, idade){
    if(idade === undefined){
        return console.log(`Olá ${nome}`)
    }else{
        return console.log(`Olá ${nome} você tem ${idade} anos de idade`)
    }
}

saudacao("André")
saudacao("Fernanda",38)