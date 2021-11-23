
//Ordenação crescente de elementos numéricos:

var valores = [4, 12, 6, 5, 10, 45, 20]
function ordenaNum(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}
 
 /*ou simplesmente
 function ordenaNum(a, b) {
     return a - b
 } */ 

    valores.sort(ordenaNum)
    for(i = 0; i < valores.length; i++) {
    console.log(valores[i] + " ") }

    /*Ordenação inversa dos elementos numéricos:

    var valores = [4, 12, 6, 5, 10, 45, 20]
    
    function ordenaNum(a, b) {
        return b - a
    }

    valores.sort(ordenaNum)
    for( i= 0; i < valores.length; i++) {
    console.log(valores[i] + " ")
    } */
    
   

