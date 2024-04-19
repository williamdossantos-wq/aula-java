//IEEE 754-2008
let num1 = 10;
let num2 = 20.937357287992;
//console.log(num1 + num2);
//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(num1.toString(2));
//console.log(num2.toFixed(2)); 

/*console.log(Number.isInteger(num1)); isInteger vai verificar se o número é inteiro: se for vai dar true, se não for vai dar false.
console.log(Number.isInteger(num2));
*/

/*let temp = num1 * 'ola';
let tempo = num1 * '9';
console.log(Number.isNaN(temp)); isNan vai verificar se a conta é invalida com true ou é valida com false.
console.log(Number.isNaN(tempo));
*/
 let num3 = 0.7;
 let num4 = 0.1;
 num3 += num4; //0.8
 num3 += num4; //0.9
 num3 += num4; //1.00
 num3 += num4; //1.1
 num3 += num4; //1.2
 num3 += num4; //1.3
 num3 += num4; //1.4
 num3 += num4; //1.5
 num3 += num4; //1.6
 num3 += num4; //1.7
 num3 += num4; //1.8
 num3 += num4; //1.9
 num3 += num4; //2.00
num3 = parseFloat(num3.toFixed(2)); // parsetFloat ou Number resolve o problema.
console.log( num3);
console.log(Number.isInteger(num3));
