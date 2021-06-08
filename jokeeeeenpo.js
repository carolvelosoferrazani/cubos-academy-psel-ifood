function solucao(joao, andre) {
    let ganhador = ""
    if(joao === "PEDRA"){
        ganhador = andre === "TESOURA" ? "JOAO": andre === "PAPEL" ? "ANDRE":"EMPATE";
    }else if(joao === "TESOURA"){
        ganhador = andre === "PAPEL" ? "JOAO" : andre === "PEDRA" ? "ANDRE":"EMPATE";
    }else{
        ganhador = andre === "PEDRA" ? "JOAO" : andre === "TESOURA" ? "ANDRE" : "EMPATE";
    }
    console.log(ganhador)
 }
 