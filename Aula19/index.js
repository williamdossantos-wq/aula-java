/*
Primitivos (imutáveis) -- string, number, boolean, undefined,
null, (bigint, symbol) --Valores copiados

Referência (mutáveis) - array, object, function - Passados por Refêrencia

*/

let a = 'A';
let b = a;
console.log(a, b);
 
let A = [1,2,3];
let B = [...A];
console.log(A, B);

A.push(5);
console.log(A, B);

B.pop();
console.log(A, B);

const c = {
    nome: 'william',
    sobrenome:'Dos Santos',
    idade:20
}

const d = {...c};
c.nome = 'liiz';
console.log(c, d);
