//85.Map -- Mapeando o array
//Dobre os numeros
const numeros = [5, 80, 50, 1, 2, 9, 547, 22, 47, 10];
const numerosemDobro = numeros.map(valor => valor * 2)
console.log(numerosemDobro);

const nomes = [
    {nome: 'Luis' , idade:62 },
    {nome: 'Maria' , idade:23 },
    {nome: 'Eduardo' , idade:55 },
    {nome: 'Letícia' , idade:19 },
    {nome: 'Rosana' , idade:32 },
    {nome: 'Wallace' , idade:47 },
    {nome: 'will', idade:55}
];

const soNomes = nomes.map(valor => valor.nome )
console.log(soNomes)
const removNome = nomes.map(valor => ({idade: valor.idade}) );
console.log(removNome);
const addNonome = nomes.map(function(valor, indice) {
    const nweValor = {...valor};
    nweValor.id = (indice +1) * 1000;
    return nweValor
})
console.log(addNonome)
console.log(nomes)