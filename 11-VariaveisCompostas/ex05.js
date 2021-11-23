
//Declaração de Matriz

var fruta = [
    ["Banana", "Maçã", "Laranja"],
    ["Pêra", "Abacaxi", "Melão"],
    ["Limão", "Ameixa", "Uva"]
]
    console.log(fruta[0][2]);

    // Exibindo valores da matriz em lista:

    var fruta = [
        ["Banana", "Maçã", "Laranja"],
        ["Pêra", "Abacaxi", "Melão"],
        ["Limão", "Ameixa", "Uva"]
    ]
    var valores = ''
    for(var l = 0; l <= 2; l++){
        for(var c = 0; c <= 2; c++) {
            valores += fruta[l][c] + "\n"
        }
    }
    console.log("Conteudo da matriz: \n" + valores)