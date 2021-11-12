
var agora = new Date()
var diaSem = agora.getDay()

/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
// console.log('diaSem')

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    
    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia inválido')       
         break
}

//Exemplo de condição MÚLTIPLA.
/*É usada para representar valores fixos e não somente o true e false.
É representada pelo comando switch(expressão). As possibilidades são 
representadas pelo case. Obrigatório o uso do break após cada case.
O default é executado no final se caso nenhum dos cases acima forem verdadeiros.*/