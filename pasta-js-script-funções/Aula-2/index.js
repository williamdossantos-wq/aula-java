// argumentos que sustenta todos os argumentos enviados

function funcao(a ,b ,c) {
   let total = 2;
   for(let argumentos of arguments) {

    total += argumentos;
}
console.log(total, a, b, c)
};
funcao(  1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcaoB(a, b, c, d, e, f, g) {
console.log( a, b, c, d, e, f, g)
}
funcaoB( 1, 2, 3, 4, 5, 6,)

function funcaoC(a, b = 2 , c = 1) {
    b = b || 0;
    console.log(a + b + c);
}
funcaoC(2, undefined , 2);


function funcaoD(operador, acumulador, ...numeros) {
for (numero of numeros){
if( operador === '+') acumulador += numero; 
if( operador === '-') acumulador -= numero; 
if( operador === '*') acumulador *= numero; 
if( operador === '/') acumulador /= numero; 

}
console.log(acumulador)}
funcaoD('-', 0, 1, 2, 3, 4, 5, 6)