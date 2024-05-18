/*
50. Atribuição via desestruturação (Arrays) */
/*let a = 'A' ;
let b = 'B' ;
let c = 'C' ;

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b ,c);*/

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, ,quinto, ...resto] = numeros;
console.log(um, tres, quinto);
console.log(resto);