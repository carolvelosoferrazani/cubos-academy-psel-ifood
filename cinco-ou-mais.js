
function solucao(precos) {
    let total = 0
    let contador = 0
    precos.sort((a,b) => a-b)
    for(preco of precos){
     total += preco
     contador++ 
    }
    total = contador >= 5 ? total - precos[0]: total;
    console.log(total)
 }
 