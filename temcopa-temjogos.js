function solucao(ano) {
    if (ano% 2 == 0){
        if((ano - 2016) % 4 === 0){
            console.log("JOGOS")
        }else{
            console.log("COPA")
        }
    }else{
        console.log("MEH")
    }
}