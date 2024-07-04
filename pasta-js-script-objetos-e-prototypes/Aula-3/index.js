/*
const outraCoisa  = {...produto, luxo: 'level 3'};
outraCoisa.nome = 'willima';
console.log(outraCoisa);
console.log(produto);
const canetaAzul = Object.assign({}, produto, {cor: 'Azul'});
canetaAzul.nome = 'bic';*/
const produto = {nome: 'caneta', preco: 1.80, secao: 13};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable:false
});
delete produto.nome
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
for(let entry of Object.entries(produto)){
    console.log(entry)
};
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}