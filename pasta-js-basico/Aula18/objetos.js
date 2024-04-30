/*const pessoa1 = {
    nome: 'William',
    sobrenome: 'Dos Snatos Moreira',
    idade: 20

};
console.log(pessoa1.nome);*/

function tabeladenomes (nome, sobrenome, idade) {
return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade 
};
}
const pessoa1 = tabeladenomes('william','dos santos moreira',20);
const pessoa2 = tabeladenomes('mria','araujo',24);
console.log(pessoa1);
console.log(pessoa2);

const humano1 = {
    nom:'bruno',
    sobre:'rataque',
    id:30,
    fala() {
        console.log(`${this.nom} ${this.sobre} esta dizendo oi....`)
    },
    incremetaidade() {
        this.id++ ;
        console.log(`minha idade é ${this.id}`)
    }
};
humano1.fala();
humano1.incremetaidade();
humano1.fala();
humano1.incremetaidade();
humano1.fala();
humano1.incremetaidade();