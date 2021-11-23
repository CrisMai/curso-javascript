
/*let estados = ["SC", "PR", "RS", "SP"]
    estados.length
    console.log(`O vetor tem ${estados.length} posições`)
    for (pos = 0; pos < 4; pos++) {
        console.log(estados[pos])
    } */

    let estados = ["SC", "PR", "RS", "SP"]
    estados.sort()
    estados.length
    estados.push("RJ")
    console.log(`O vetor tem ${estados.length} posições`)
    for(let pos in estados) { //Estrutura simplificada ==> for(  in  )
        console.log(estados[pos])
    }
