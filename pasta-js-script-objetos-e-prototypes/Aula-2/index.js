// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof valor !== 'number'){
                console.log('valor mau')
            }
          estoquePrivado = valor;
        }



    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: false, //pode alterar
            configurable: false //configuravel

        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: false, //pode alterar
            configurable: false //configuravel

        },
    })
}
const p1 = new Produto('camisa', 20, 7);
p1.estoque = 20;

console.log(p1);
console.log(p1.estoque)