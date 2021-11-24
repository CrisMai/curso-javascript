
//Função recebendo parâmetros, retornando um valor e recebendo um Array:

var numeros = new Array(10, 5, 25, 40, 6, 12)

function media(nums) {
    var tam = nums.length
    var soma = 0
    for(var i = 0; i < tam; i++) {
        soma += nums[i]
    }
    return (soma/tam)
}
console.log(media(numeros))