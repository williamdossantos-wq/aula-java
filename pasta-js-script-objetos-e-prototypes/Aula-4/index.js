//93.Prototypes
// Construtora -> molde (classe)

/*function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
}
const pessoa1 = new Pessoa('william', 'Moreira');
const pessoa2 = new Pessoa('Jaqueline', 'Sousa');
console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2.nomeCompleto());
*/

//new Object -> Object.prototype
const objA = {
chaveA: 'Ana'
//_proto_ = Object.prototype
};
const objB = {
    chaveB: 'Bruno'
};
const objC = {
    chaveC: 'Caio'
};
Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objB,objA)

console.log(objC.chaveA);

function  Produto(item, preco) {
    this.item = item;
    this.preco = preco;
};
Produto.prototype.desconto = function(percetual) {
this.preco = this.preco - (this.preco * (percetual / 100))
};
Produto.prototype.aumento = function(aumento) {
    this.preco = this.preco + (this.preco * (aumento / 100))
    };
const p1 = new Produto('camiseta', 10)
p1.aumento(10)
//p1.desconto(10)
const p2 = {
    nome:'chinelo',
    preco:20
}

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento('200')

console.log(p1);
console.log(p2);
const p3 = Object.create(Produto.prototype);
p3.preco = 40;
p3.aumento(10);
console.log(p3);