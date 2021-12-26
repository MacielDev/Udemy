function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par:" + n )
    }else{
        console.log(n)
        retornarNumeroPar(n-1)
    }
}

retornarNumeroPar(4)
retornarNumeroPar(9)