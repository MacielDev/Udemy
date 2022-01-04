//Método includes

let palavraSecreta = "pindamonhangaba"

let contem = palavraSecreta.includes("t")
console.log(contem)
if (contem) {
    console.log(`A palavra possui a letra m`)
} else {
    console.log("A palavra não possui a letra informada")
}