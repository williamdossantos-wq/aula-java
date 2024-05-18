const pessoa = {
    nome:'william',
    sobrenome:'Moreira',
    idade:20,
    endereço:{
        rua:'aV brasila',
        numero:4563
    }
};
//Atribuição via desestruturação
const { nome, sobrenome, endereço:{rua,numero}}= pessoa;
console.log(nome, sobrenome, rua );