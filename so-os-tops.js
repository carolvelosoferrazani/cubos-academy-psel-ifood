function solucao(produtos) {
	let totalProduto = 0
    const totalTop = {
        totalTop : 0,
        percentual: 0
    }
    for(let produto of produtos){
        totalProduto += produto.preco;
        if(produto.preco >= 10000){
            totalTop.totalTop += produto.preco;
        }
    }
    totalTop.percentual = totalTop.totalTop/totalProduto
    console.log(totalTop);  
}