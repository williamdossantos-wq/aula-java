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
chaveA: 'A'
//_proto_ = Object.prototype
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
};
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveB);

