//Função simples (sem parâmetros):

function saudacao() {
    return "Olá!"
}
saudacao()
console.log(saudacao())

function escreve() {
    return console.log("JavaScript!") 
}
escreve()


//Função recebendo parâmetros e retornando um valor:

function soma(n1, n2) { 
    return n1 + n2  
}
console.log(soma(10, 2))


function parimpar(n) {
    if(n%2 == 0) {
        return 'Par!'
    }
    else {
        return 'Impar!'
    }
}
console.log(parimpar(9))

