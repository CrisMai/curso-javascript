
//Parâmetro pré-definido:

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))


//Função dentro de uma variável:

let v = function(x) {
    return x*2
}

console.log(v(9))