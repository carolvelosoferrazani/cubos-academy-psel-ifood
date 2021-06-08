function solucao(letra, palavras) {
	let palavrasErradas = 0
    for(palavra of palavras){
        if(palavra[0] != letra){
            palavrasErradas ++
        }
    }
  console.log(palavrasErradas)  
}