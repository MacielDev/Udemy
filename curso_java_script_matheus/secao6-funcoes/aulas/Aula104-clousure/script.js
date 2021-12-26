// exemplo de clousures de
function lembrarSoma (x) {
    return function (y){
        return x + y;
    }
}