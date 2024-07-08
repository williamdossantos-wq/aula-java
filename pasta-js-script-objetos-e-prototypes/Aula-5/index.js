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

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
     this.cor = cor;
};
function Caneca(nome, preco , material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
get: function() {
    return estoque;
}, set: function(valor) {
    if(typeof valor !== 'number') return;
    estoque = valor;
}
    })
}
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca
const camiseta = new Camiseta('regata', 7.50, 'preta');
camiseta.aumento(10)

const p1 = new Produto('rede', 15, 'ver')
const caneca = new Caneca('reck', 5, 'vidro', 50)
caneca.aumento(20)
console.log(camiseta)
console.log(p1)
console.log(caneca)