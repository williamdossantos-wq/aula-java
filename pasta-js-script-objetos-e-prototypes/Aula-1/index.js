const pessoa = {
    nome: 'william',
    sobrenome: 'Moreira'
};
console.log(pessoa)
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
const pessoa1 = new Object();
pessoa1.nome = 'William';
pessoa1.sobrenome = 'Moreira';
console.log('==================')
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.falarNome = function() {
    return(`${this.nome} esta falando o proprio nome `);
}
console.log(pessoa1.falarNome());
pessoa1.idade = 21;
pessoa1.dataDeNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log(pessoa1.dataDeNascimento());
console.log('==================');
for(let chave in pessoa1){
    console.log(chave)
    console.log(pessoa1[chave]);
};
console.log('==================');
// Fanction function / Construtor functions / Classes
function criaPessoa(nome1, sobrenome1) {
    return {
        nome1,
        sobrenome1,
        nomeCompleto() {
            return `Nome:${this.nome1} ${this.sobrenome1}`;
        }
    }
};
const p1 = criaPessoa( 'william' , 'Moreira')
console.log(p1.nomeCompleto());
console.log('==================');
function Pessoa(nome2, sobrenome2) {
    this.nome = nome2;
    this.sobrenome = sobrenome2;
}
const p3 = new Pessoa('william', 'Moreira') ;
Object.freeze(p3); //um bloqueador pra nunca mudar o valor
const p4 = new Pessoa('Maria', 'rosa')
console.log(p3);
console.log(p4)