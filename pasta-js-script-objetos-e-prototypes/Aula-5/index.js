//95.Heranças
//Produto = aumento , desconto
//camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

