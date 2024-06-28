//86.Reduce
const numeros = [5, 80, 50, 1, 2, 9, 546, 22, 47, 10, 16];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
 // if(valor % 2 === 0) acumulador.push(valor);
 //acumulador.push(valor * 2)
 if(valor % 2 !== 0) {
    acumulador += valor;
 }
return acumulador
}, 0);
console.log(total);
const nomes = [
    {nome: 'Luis' , idade:62 },
    {nome: 'Maria' , idade:23 },
    {nome: 'Eduardo' , idade:5 },
    {nome: 'Letícia' , idade:119 },
    {nome: 'Rosana' , idade:32 },
    {nome: 'Wallace' , idade:47 },
    {nome: 'will', idade:55}
];
const maisVelha = nomes.reduce(function(acumulador,valor) {
    if(acumulador.idade < valor.idade) return valor;
    return acumulador;
    
})
console.log(maisVelha)