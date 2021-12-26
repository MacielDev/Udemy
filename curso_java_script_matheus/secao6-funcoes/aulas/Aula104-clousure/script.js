// exemplo de clousures de
function lembrarSoma (x) {
    return function (y){
        return x + y;
    }
}
let soma3 = lembrarSoma(2)
console.log(soma3(5))

let soma4 = lembrarSoma(5)
console.log(soma4(7))

console.log("**********************************")
console.log("******* Exemplo Contador *********")

    function contador(i) {
        let cont = i
        let somarContador = function(){
            console.log(cont)
            cont++
        }
        return somarContador
        
    }
    let meucontador = contador(5)
    meucontador()
    meucontador()
    meucontador()