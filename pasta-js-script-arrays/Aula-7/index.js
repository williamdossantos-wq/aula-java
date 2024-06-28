const numeros = [5, 80, 50, 1, 2, 10, 546, 22, 47, 10, 16, 13];
const numerosPares = numeros.filter(valor => valor % 2 === 0
).map(valor => valor * 2
).reduce((acumulador,valor) => acumulador + valor
);
//80, 50,  2, 546, 22, 10, 16
//160, 100,  4, 1092,  44, 20, 32
console.log(numerosPares)