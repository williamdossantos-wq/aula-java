const nome = 'william moreira';
const nome1 = ['william', 'luis', 'bruno', 'henrique']
const pessoa = { // objeto
    nome: 'william',
    sobrenome: 'moreira'
};

for (let i = 0; i < nome.length; i++){ // não funciona com objetos
    console.log(nome[i]);
};

for (let i in pessoa){
    console.log(i, pessoa[i]); // funciona com objetos
};

for (let valor of nome){
    console.log(valor); //user para pegar o valor
}
//For Clássico - Geralmente com Íteraveis (arrays, ou strings)
//For in - Retorna o índice ou chave (array, string,objetos ) 
//For of - Retorna o valor em si ( iteraveis, arrays ou strings)