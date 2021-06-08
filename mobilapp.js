
function solucao(tempo, distancia) {
	let preco = 0
    preco = tempo <= 5? 6*100 : tempo <= 60? (tempo+(distancia*0.5))*100: 
            distancia <= 100? distancia*2*100 : distancia*1.5*100
    console.log(preco)

}
