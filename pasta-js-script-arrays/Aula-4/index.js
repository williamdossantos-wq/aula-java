// Filter -> vai sempre retornar um array, com a mesma quantidade de elementos ou menos
// map, reduce
// 84.Filter

// Retorne os numeros maiores que 10
const numeros = [5, 80, 50, 1, 2, 9, 547, 22, 47, 10];

const numerosFiltrados = numeros.filter(function (valor, indice, array) {
    return valor > 10;
    /*funciona mas não é recomedado user o a expressão de cima
    if(valor > 10) {
    return true;
    } else{
        return false;
    }*/
    });
console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais 
//Retorne as pessoas com mais de 50 anos 
//Retorne as pessoas cujo nome termina com a
const nomes = [
    {nome: 'Luis' , idade:62 },
    {nome: 'Maria' , idade:23 },
    {nome: 'Eduardo' , idade:55 },
    {nome: 'Letícia' , idade:19 },
    {nome: 'Rosana' , idade:32 },
    {nome: 'Wallace' , idade:47 },
    {nome: 'will', idade:55}
];
const pessoasComnomesGrandes = nomes.filter(obj =>  obj.nome.length >= 5
);

const pessoasCommaisde50 = nomes.filter( valor =>  valor.idade >= 50)
const nomesqueTerminascomA = nomes.filter(valor => valor.nome.toLowerCase().endsWith('e'))
console.log(pessoasComnomesGrandes)
console.log(pessoasCommaisde50)
console.log(nomesqueTerminascomA)