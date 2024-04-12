/*
William Dos Santos Moreira tem 20 anos, pesa 106 kg
tem 1.68 de altura e seu IMC é de 37.55668934240364
nasceu em 2003
*/
const nome ='William';
const sobrenome = 'Dos Santos Moreira';
const idade = 20;
const peso = 106;
const tamanho = 1.68;
let imc = peso/ (tamanho * tamanho);
let anoNascimento = 2024 - idade;
console.log(imc)
console.log (anoNascimento)
console.log(nome+' ' +sobrenome, 'tem', idade, 'anos' ,'pesa', peso , 'kg')
console.log('tem' , tamanho , 'de altura e seu IMC é de' ,imc)
console.log( 'ele nasceu em',anoNascimento)

