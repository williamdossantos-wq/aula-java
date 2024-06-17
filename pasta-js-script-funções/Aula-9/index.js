// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
const ID = 123445;
const metodoInterno= function() {

};


//Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('William', 'Dos Santos') ;
const p2 = new Pessoa('Ana', 'Maria');
p1.metodo();