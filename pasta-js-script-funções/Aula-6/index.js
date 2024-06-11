//IIFE -> Immediately invoked function expression = funções imediatas 

function qualquerCoisa () {
    console.log(12344)
};
qualquerCoisa();

(function(idade, peso, altura) {
const sobrenome = 'Santos moreiora'
function criaNome(nome) {
    return nome + ' ' + sobrenome
}
function falaNome() {
console.log(criaNome('Wilçliam'))
}
falaNome();

console.log(idade, peso, altura);
})(21, 107, 68);

const nome = 'luz';
console.log(nome)