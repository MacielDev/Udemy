//Definindo uma Arrow Function com nome
arrowSoma = (numero1,numero2) =>{
    return numero1+numero2
}

console.log(arrowSoma(2,3))

//Definindo uma Arrow Function e atribuindo seu resultado à uma variável

let produto =(numero1,numero2)=>{
    return numero1*numero2
}

console.log(produto(2,3))

const numero = (n)=>{
    if(n % 2 != 0){
        return `Numero ${n} é ímpar`
    }else{
        return `Número ${n} é par`
    }
}

console.log(numero(5))